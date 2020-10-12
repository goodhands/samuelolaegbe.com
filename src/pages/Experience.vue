<template>
    <Layout>
        <section class="flex flex-col-reverse sm:flex-row justify-between mt-20">
            <section class="h-128 sticky w-full sm:w-2/12">
                <a :href="$static.metadata.social.gh" target="_blank" class="bg-white flex flex-row-reverse font-body items-center justify-between px-2 py-2 shadow">
                    <img src="https://octodex.github.com/images/original.png" class="h-5" title="Git Octocat"/>
                    Open Source
                </a>
                
                <hr>
                
                <h3 class="text-xl mt-6">Tools</h3>
                <hr>
                <ul>
                    <li class="font-body" v-for="tool in tools" :key="tool">
                        {{ tool }}
                    </li>
                </ul>

                <h3 class="text-xl mt-6">Skills</h3>
                <hr>
                <ul>
                    <li class="font-body" v-for="skill in skills" :key="skill">
                        {{ skill }}
                    </li>
                </ul>
            </section>

            <section class="flex flex-col w-full sm:w-9/12">
                <h2 class="text-4xl leading-none">
                    Samuel Olaegbe
                </h2>

                <div class="body">
                    <div class="flex flex-col sm:flex-row justify-between">
                        <p class="font-body font-hairline text-secondary text-xl">
                            Senior Backend Engineer
                        </p>
                        <div class="space-x-10 text-left">
                            <a target="_blank" :href="$static.metadata.social.lnkd">LN</a>
                            <a target="_blank" :href="$static.metadata.social.gh">GH</a>
                            <a target="_blank" :href="$static.metadata.social.tm">TN</a>
                            <a target="_blank" :href="$static.metadata.social.tw">TW</a>
                        </div>
                    </div>
                    <hr>
                    <p class="font-body mt-3">
                        Strong in design and problem solving skills. 
                        Backend Developer with 3 years of experience building 
                        products for clients around the globe. I am passionate about efficient, 
                        fast and thoroughly built web systems, I love creating system architecture, 
                        RESTful APIs and overall giving the user an awesome web experience.
                    </p>

                    <section class="mt-10">
                        <h4 class="text-2xl mb-5">Work Experience</h4>                        
                        <!-- Experience -->
                        <div class="font-body resume-item flex mt-10 flex-col sm:flex-row justify-between" v-for="work in experience" :key="work.company">
                            <div class="resume-body w-full sm:w-9/12">
                                <h5 class="mb-3 text-xl">
                                    <span class="font-bold">{{ work.company }}</span>
                                    -
                                    {{ work.role }} 
                                </h5>
                                <div class="sm:hidden">
                                    {{ work.start }} - {{ work.end }}
                                </div>
                                <hr class="mb-4 sm:hidden">
                                <p class="mb-3 text-xl text-secondary">
                                    {{ work.summary }}
                                </p>
                                <ul class="list-disc text-lg list-inside text-secondary">
                                    <li v-for="(achievements, index) in work.achievements" :key="index" class="break-words">
                                        {{ achievements }}
                                    </li>
                                </ul>
                            </div>
                            <div class="hidden sm:block">
                                {{ work.start }} - {{ work.end }}
                            </div>
                        </div>
                        <!-- End Experience -->
                    </section>


                </div>
            </section>
        </section>
    </Layout>
</template>

<static-query>
query {
  metadata {
    social {
        fb,
        lnkd
        tw
        tm
        gh
    }
  }
}
</static-query>

<script>
    import experience from '@/content/experience.yaml';
    
    export default {
        data() {
            return {
                experience: experience.experiences,
                skills: experience.skills,
                tools: experience.tools,
            }
        },
    };
</script>

<style>
    ul.list-disc.text-lg.text-secondary li{
        margin-bottom: 13px;
    }

    .sticky{
        top: 50px;
    }
</style>