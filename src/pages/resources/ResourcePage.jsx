import {
  BookOpen,
  Receipt,
  Landmark,
  BarChart3,
  BadgeDollarSign,
  Globe,
  User,
  Building2,
  Briefcase,
  Home,
  PiggyBank,
  TrendingUp,
  Calculator,
  FileText,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";


const iconMap = {
  BookOpen,
  Receipt,
  Landmark,
  BarChart3,
  BadgeDollarSign,
  Globe,
  User,
  Building2,
  Briefcase,
  Home,
  PiggyBank,
  TrendingUp,
  Calculator,
  FileText,
};



export default function ResourcePage({ resource }) {


  if (!resource) {
    return (
      <div className="p-20">
        <h1 className="text-3xl font-bold text-red-600">
          Resource not found
        </h1>
      </div>
    );
  }



  const topics =
    resource.topicsTitle?.topics || resource.topics || [];



  const knowledge =
    resource.knowledgeSection?.items || resource.knowledge || [];



  const government =
    resource.governmentResources?.resources ||
    resource.governmentResources ||
    [];
    
    const guides =
  resource.guides || [];



  return (

    <>

      {/* HERO */}

      <PageHero
        image={resource.hero.image}
        eyebrow={resource.hero.eyebrow}
        title={resource.hero.title}
        description={resource.hero.description}
      />




      {/* INTRODUCTION */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-[#0B2D4D]">

            {
              resource.overview?.title ||
              resource.introduction?.title
            }

          </h2>



          {
            (
              resource.overview?.paragraphs ||
              resource.introduction?.paragraphs ||
              []
            ).map(
              (paragraph,index)=>(

                <p
                  key={index}
                  className="mt-8 text-lg leading-8 text-gray-700"
                >
                  {paragraph}
                </p>

              )
            )
          }


        </div>

      </section>






      {/* TOPICS */}

        <section className="py-20 bg-[#F8FAFC]">

          <div className="max-w-7xl mx-auto px-6">


            <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">

              {
                resource.topicsTitle?.title ||
                "Common Topics"
              }

            </h2>



            <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">

              {
                resource.topicsDescription ||
                ""
              }

            </p>




            <div className="grid lg:grid-cols-2 gap-8 mt-16">


              {
                topics.map(
                  (topic,index)=>{


                    const Icon =
                      iconMap[topic.icon];



                    return (

                      <a
                        key={index}
                        href="#government-resources"
                        className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer"
                      >


                        <div className="flex items-start gap-5">


                          <div className="bg-[#0B2D4D] p-4 rounded-2xl">


                            {
                              Icon &&

                              <Icon
                                className="text-[#C8A24A]"
                                size={26}
                              />

                            }


                          </div>




                          <div className="flex-1">


                            <h3 className="text-2xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

                              {topic.title}

                            </h3>



                            <p className="mt-4 text-gray-600 leading-7">

                              {topic.description}

                            </p>



                            <div className="mt-6 inline-flex items-center gap-2 text-[#C8A24A] font-semibold">

                              View Official Government Resources

                            </div>



                          </div>



                        </div>



                      </a>

                    );


                  }

                )

              }


            </div>


          </div>


        </section>





      {/* KNOWLEDGE */}


      <section className="py-20 bg-white">


        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-[#0B2D4D]">

            {
              resource.knowledgeSection?.title ||
              resource.knowledgeTitle ||
              "Things You Should Know"
            }

          </h2>



          <div className="mt-10 space-y-8">


            {
              knowledge.map(
                (item,index)=>(

                  <div key={index}>


                    <h3 className="text-xl font-semibold text-[#0B2D4D]">

                      {item.title}

                    </h3>


                    <p className="mt-3 text-gray-600 leading-7">

                      {item.description}

                    </p>


                  </div>

                )
              )
            }


          </div>


        </div>


      </section>

      

      {/* GOVERNMENT RESOURCES */}


    <section
      id="government-resources"
      className="py-20 bg-[#F8FAFC]"
    >


      <div className="max-w-5xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-[#0B2D4D]">


          {
            resource.governmentTitle ||
            resource.governmentResources?.title ||
            "Official Government Resources"
          }


        </h2>



        <p className="mt-6 text-lg text-gray-600 leading-8">


          {
            resource.governmentDescription ||
            resource.governmentResources?.description ||
            ""
          }


        </p>




        <div className="mt-12 space-y-4">


          {
            government.map(
              (item,index)=>(


                <a

                  key={index}

                  href={item.link}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="
                    flex items-center justify-between
                    rounded-xl
                    border border-gray-200
                    px-6 py-5
                    hover:border-[#C8A24A]
                    hover:bg-white
                    transition duration-300
                    group
                  "

                >


                  <span
                    className="
                      font-semibold
                      text-[#0B2D4D]
                      group-hover:text-[#C8A24A]
                      transition
                    "
                  >

                    {item.title}

                  </span>



                  <ExternalLink
                    className="text-[#C8A24A]"
                    size={20}
                  />


                </a>


              )
            )
          }


        </div>


      </div>


    </section>


    </>

  );

}