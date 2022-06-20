import Image from "next/image";

import Joblisting from "../src/componants/Hero/jobslist";
import Verticlemarquee from "../src/componants/Hero/VerticleMarquee";
import Verticlemarquee2 from "../src/componants/Hero/VerticleMarquee/index2";
import Verticlemarquee3 from "../src/componants/Hero/VerticleMarquee/index 3";
import client from "../lib/apollo";
import Link from "next/link";

import { gql } from "@apollo/client";
import Candlisting from "../src/componants/Candidates/candidatelist";

import Container from "../src/componants/container";
import Applic from "../src/componants/appplic";
import Candhero from "../src/componants/Candidates/candidatehero";

export default function Home({ jobs, applicant }) {
  return (
    <>
      <section className="   relative ">
        <div className="flex flex-wrap w-full bg-gradient-to-br from-[#1A0976] via-[#100750] to-black ">
          <div className="group  w-full xl:w-1/2 flex items-stretch  ">
            {/* <div className="group-item absolute ">
              <img src="logo.svg" className="opacity-5 rotate-45 self-end" />
            </div> */}
            <div className=" w-full   flex flex-col items-center px-8 pt-12 pb-24 mx-auto sm:rounded-lg  sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
              <div className="w-full mb-5 sm:w-11/12 lg:w-2/3 lg:mb-10">
                <h1 className="pt-5 text-2xl font-bold text-left text-white md:pt-8 sm:text-center lg:pt-20 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Your go to choice for help with{" "}
                  <br className="hidden sm:block" /> SEO recruitment.
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full mb-10 sm:flex-row sm:mb-20">
                <Link href="#candidate">
                  <a className="w-full font-bold px-8 py-3 text-lg text-center text-royal transition duration-150 ease-in-out bg-white rounded-md sm:w-auto focus:outline-none">
                    Explore candidates
                  </a>
                </Link>
                <Link href="#job">
                  <a
                    href="#_"
                    className="w-full px-8 py-3 mt-5  font-bold text-lg text-center text-white transition duration-150 ease-in-out bg-transparent border border-white rounded-md sm:ml-6 sm:w-auto sm:mt-0 focus:outline-none hover:bg-white hover:text-royal"
                  >
                    View Jobs
                  </a>
                </Link>
              </div>

              <div className="flex  ">
                <Image
                  src={"/star.png"}
                  width={130}
                  height={25}
                  alt={"Trustpilotreviews"}
                />
              </div>
              <div className="flex flex-col items-center justify-center sm:flex-row ">
                <p className="text-gray-200 pr-2">see our reviews on</p>
                <div>
                  <div className="pt-2">
                    <Image
                      src={"/trustpilot-1.svg"}
                      width={75}
                      height={75}
                      alt={"Trustpilot Logo"}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full   relative  xl:w-1/2  ">
            <div className="circlecclip w-full  text-white h-full">
              <div className="w-full ">
                <Verticlemarquee />
              </div>
              <div className="opacity-60">
                <Verticlemarquee2 />
              </div>
              <div className="opacity-40">
                <Verticlemarquee3 />
              </div>
            </div>
          </div>
        </div>

        <div
          id="job"
          className="container rounded-xl flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-20 mb-10 overflow-hidden "
        >
          <div className=" w-11/12  rounded-xl sm:w-2/3">
            {jobs.map((job) => (
              <Joblisting
                key={job.slug}
                slug={job.slug}
                title={job.jobListing.positionTitle}
                salary={job.jobListing.salary}
                location={job.jobListing.location}
                type={job.jobListing.type}
                intro={job.jobListing.intro}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div id="candidate" className="">
          <Applic />
        </div>
        <Container>
          <div className="p-4 ">
            <div className="lg:grid grid-cols-2 gap-3">
              {applicant.map((app, index) =>
                index === 0 ? (
                  <div className="col-span-2 -mt-40 md:-mt-48 sm:-mt-20 mb-10 overflow-hidden z-999 ">
                    <Candhero
                      key={app.slug}
                      slug={app.slug}
                      jobTitle={app.candidate.jobTitle}
                      salary={app.candidate.salary}
                      yearsOfExperience={app.candidate.yearsOfExperience}
                      locaiton={app.candidate.locaiton}
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-lg mx-auto mt-4 lg:max-w-none pointer-cursor">
                    <Candlisting
                      key={app.slug}
                      slug={app.slug}
                      jobTitle={app.candidate.jobTitle}
                      salary={app.candidate.salary}
                      yearsOfExperience={app.candidate.yearsOfExperience}
                      locaiton={app.candidate.locaiton}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* <div className=" pointer-cursor relative  max-w-7xl mx-auto   ">
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div> */}
    </>
  );
}

//  <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//    Fancy Mo dal
//  </Modal>;

export async function getStaticProps() {
  const { data: job } = await client.query({
    query: gql`
      query AllJobs {
        jobs(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            slug
            jobListing {
              type
              salary
              responsibilities
              positionTitle
              fieldGroupName
              candidateRequirements
              benefits
              location
              intro
            }
          }
        }
      }
    `,
  });

  const { data: app } = await client.query({
    query: gql`
      query Getcandidates {
        candiates(first: 10) {
          nodes {
            id
            slug
            candidate {
              id
              additionalInfo
              availability
              jobTitle
              locaiton
              name
              yearsOfExperience
              specialism
              salary
              portfolio
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      jobs: job.jobs.nodes,

      applicant: app.candiates.nodes,
    },
    revalidate: 10,
  };
}

// <div>
//   {" "}
//   {applicant.map((app) => {
//     return (
//       <div key={app.id}>
//         <div className="">
//           <section className=" place-items-center py-8  rounded-xl ">
//             <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
//               <div className="px-10 mx-auto max-w-7xl md:px-16 text-2xl">
//                 <div className="max-w-3xl mx-auto bg-royal rounded-xl  text-white  b-10 md:mb-16">
//                   <Link href={`/candidate/${app.candidate.slug}`}>
//                     <h2 className="text-2xl px-3 font-bold leading-7 text-black sm:text-3xl sm:truncate">
//                       {app.candidate.jobTitle}
//                     </h2>
//                   </Link>
//                   <br />
//                   <br />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   })}
// </div>;

// <div className="flex text-center opacity-30 font-bold text-7xl ">
//   <div>Candidate Showcase</div>
// </div>;
