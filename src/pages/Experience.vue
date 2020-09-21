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
                        <!-- Experience -->
                        <div class="font-body resume-item flex mt-10 flex-row justify-between" v-for="work in experience" :key="work.company">
                            <div class="resume-body w-9/12">
                                <h5 class="mb-3 text-xl">
                                    <span class="font-bold">{{ work.company }}</span>
                                    -
                                    {{ work.role }} 
                                </h5>
                                <p class="mb-3 text-xl text-secondary">
                                    {{ work.summary }}
                                </p>
                                <ul class="list-disc text-lg text-secondary">
                                    <li v-for="(achievements, index) in work.achievements" :key="index">
                                        {{ achievements }}
                                    </li>
                                </ul>
                            </div>
                            <div id="timeline">
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

<script>
    import experience from '@/content/experience.yaml';
    
    export default {
        data() {
            return {
                experience
            }
        },
    };
</script>