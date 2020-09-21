<template>
    <Layout>
        <section class="flex flex-row mt-20">
            <section class="w-3/12 sticky">
                <h3 class="title">Other Skills</h3>
            </section>

            <section class="flex flex-col w-9/12">
                <div class="flex flex-row justify-between">
                    <h2 class="text-4xl leading-none">
                        Samuel Olaegbe
                    </h2>
                    <div class="text-left mb-3">
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>

                <div class="body">
                    <p class="font-body font-hairline text-secondary text-xl">
                        Senior Backend Engineer
                    </p>
                    <hr>
                    <p class="font-body mt-3">
                        Strong in design and problem solving skills. 
                        Backend Developer and Laravel Engineer with 4 years of experience building successful 
                        products for clients around the globe. I am passionate about efficient, 
                        fast and thoroughly built web systems, I love creating system architecture, 
                        RESTful APIs and overall giving the user an awesome web experience.
                    </p>

                    <section class="mt-10">
                        <h4 class="text-2xl mb-5">Work Experience</h4>
                        <!-- TODO:An API that serves a single source of truth for when i update my resume  -->
                        
                        <!-- HNG -->
                        <div class="font-body resume-item flex mt-10 flex-row justify-between">
                            <div class="resume-body w-9/12">
                                <h5 class="mb-3 text-xl">
                                    <span class="font-bold">HNG Bootcamp</span>
                                    -
                                    Back End Developer 
                                </h5>
                                <p class="mb-3 text-lg text-secondary">
                                    As tech lead, I led a team of 20+ developers and 
                                    guided the architecture and scope of the the Expense NG project 
                                    by providing a walk-through of the government's Open Treasury 
                                    (opentreasury.gov.ng) website which was crawled to fetch the 
                                    expense sheets for each year.
                                </p>
                                <ul class="list-disc text-lg text-secondary">
                                    <li>Introduced and enforced consistent coding conventions and standards across the application.</li>
                                    <li>Allowed visitors to make comments and interact with each other with a comments section which is available on each company/ministry's page, the comments component was built by me with Vue.js, Pusher and Laravel Echo</li>
                                </ul>
                            </div>
                            <div id="timeline">
                                June 2020 - August 2020 
                            </div>
                        </div>
                        <!-- End HNG -->

                        <!-- Stylishcare -->
                        <div class="font-body resume-item flex mt-10 flex-row justify-between">
                            <div class="resume-body w-9/12">
                                <h5 class="mb-3 text-xl">
                                    <span class="font-bold">Stylishcare</span>
                                    -
                                    Full Stack Engineer (Contractor)
                                </h5>
                                <p class="mb-3 text-lg text-secondary">
                                    Led the development of a feature rich Warehouse management software for the company built as an efficient single page application using Laravel & Vue.js to replace the previous software which had a lot of restrictions and didn't fit their business plan.
                                </p>
                                <ul class="list-disc text-lg text-secondary">
                                    <li> 
                                        By implementing a simple and accessible user interface for the packer to 
                                        see all that is going on at once and also give proper feedback as each 
                                        product is scanned, employees have recorded a decrease in time taken to 
                                        package an order and ship by 50%.
                                    </li>
                                    <li>
                                        Client was satisfied with the solution which aligns properly with their 
                                        business goals and allows them to in turn satisfy customers with accurate 
                                        & just-in-time shipping.
                                    </li>
                                    <li> 
                                        Implemented audio and visual feedback across the admin dashboard to aid the 
                                        packers who may not be paying attention while scanning orders.
                                    </li>
                                </ul>
                            </div>
                            <div id="timeline">
                                May 2020 - July 2020 
                            </div>
                        </div>
                        <!-- End Stylishcare -->
                    </section>
                </div>
            </section>
        </section>
    </Layout>
</template>

<script>
export default {
    
}
</script>