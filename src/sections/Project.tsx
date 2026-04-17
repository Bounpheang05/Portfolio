// import React from "react";
// import { projects } from "../data/projectData";

// const Project = () => {
//   return (
//     <section
//       id="project"
//       className="min-h-screen text-center  text-text-secondary flex justify-center py-50 "
//     >
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl ">
//         {projects.map((project) => (
//           <li key={project.id}>
//             <li className="h-50 bg-amber-200">{project.image}</li>
//             <li className="pt-5">{project.title} </li>
//             <div className="text-start ">
//                <li>{project.desc} </li>
//             <li className="">{project.tag} </li>
//             <li className="gap-x-2 ">{project.tech} </li>
//             <li>{project.github} </li>
//             <li>{project.demo} </li>
//             </div>
           
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Project;
import { projects } from '../data/projectData'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <section id='project' className='min-h-screen py-20 '>
      <div className='max-w-7xl mx-auto px-6'>
        <header className='mb-12 text-center'>
          <h2 className='text-4xl font-bold text-primary-500 '>Featured Work</h2>
          <p className='text-text-muted  mt-2 '>A collection of things I've built</p>
        </header>
        <ul className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8'>
          {projects.map((item)=>(
            <ProjectCard key={item.id} project={item}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Project
