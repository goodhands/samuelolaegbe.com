import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { Link as LinkIcon } from 'lucide-react'

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: any) {
	const { href, className, children, ...rest } = props;
	if (!href) return <a {...props} />;

	if (href.startsWith('/')) {
	  return (
		<Link href={href} className={className} {...rest}>
		  {children}
		</Link>
	  );
	}
	if (href.startsWith('#')) {
	  return <a href={href} className={className} {...rest}>{children}</a>;
	}
	return (
	  <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
		{children}
	  </a>
	);
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, className = '', ...props }: any) {
	const codeString =
    typeof children === 'string'
      ? children
      : Array.isArray(children)
      ? children.join('')
      : '';

  const lang = (className.match(/language-(\\w+)/) || [])[1] || '';
	if (!lang) {
		// Inline code, no highlighting
		return (
		<code className={className} {...props}>
			{children}
		</code>
		);
	}

	// Block code: highlight
	const codeHTML = highlight(codeString);
	return (
		<pre className={className} {...props}>
		<code
			className={className}
			data-lang={lang}
			dangerouslySetInnerHTML={{ __html: codeHTML }}
		/>
		</pre>
	);
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function extractText(children: any): string {
	if (typeof children === 'string') return children;
	if (Array.isArray(children)) return children.map(extractText).join('');
	if (children && typeof children === 'object' && children.props) return extractText(children.props.children);
	return '';
}

function createHeading(level: number) {
	const Heading = ({ children, ...props }: any) => {
	  const slug = slugify(extractText(children));
	  return React.createElement(
		`h${level}`,
		{ id: slug, ...props },
		[
		  <a href={`#${slug}`} key={`link-${slug}`} className="relative anchor w-4 h-4">
			<LinkIcon className="w-4 h-4 mr-1 inline-block" />
		  </a>,
		  children,
		]
	  );
	};
	Heading.displayName = `Heading${level}`;
	return Heading;
}

const components = {
h1: createHeading(1),
h2: createHeading(2),
h3: createHeading(3),
h4: createHeading(4),
h5: createHeading(5),
h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  pre: (props: any) => {
		// MDX wraps block code as <pre><code class="language-php">...</code></pre>
		// We want to pass the inner code to our Code component
		const child = props.children && props.children[0]
		if (
			child &&
			typeof child === 'object' &&
			'props' in child &&
			typeof child.props.children === 'string'
		) {
			return (
			<Code className={child.props.className}>
				{child.props.children}
			</Code>
			)
		}
		// fallback (rare)
		return <pre {...props} />
  },
  Table,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
