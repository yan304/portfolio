import Image from "next/image";

const list = [
  "Languages: Python, JavaScript, TypeScript, C++",
  "Frameworks & Libraries: React, Next.js, Express, Laravel",
  "DevOps & Tools: Docker, Git, GitHub Actions, Postman",
  "Databases: MySQL, MongoDB",
  "Cloud: AWS, Firebase, Vercel",
]

export const About = () => {
  return <div className="flex justify-around items-center min-h-screen">
    <div className="flex flex-col overflow-y-auto h-[85vh]">
      <div className="text-3xl font-light max-w-screen-md">
        <div className="text-5xl"><b>🧑‍💻 About Me</b></div><br />
        &emsp;&emsp;Hi, I'm Marcelino, a <b>Mid Software Engineer</b> with a passion for building web/backend/full-stack applications. I specialize in Frontend, and I love solving real-world problems with clean, scalable code.
        <br /><br />
        Currently, I'm working on learning new tech stack, and I'm always open to new challenges in new technologies.
      </div>
      <div className="text-3xl font-light max-w-screen-md pt-12">
        <div className="text-5xl"><b>🧠 Skills</b></div><br />
        <ul>
          {list.map((item, key) => <li key={key} className="text-3xl pt-2">
            {item}
          </li>)}
        </ul>
      </div>
       <div className="text-3xl font-light max-w-screen-md pt-12">
        <div className="text-5xl"><b>💼 Experience</b></div><br />
        <div>
          Software Engineer – Fligno Software Philippines<br/>
          <span className="italic">May 2021 – May 2025</span>
          <div className="pb-6">Philippines</div>

          <ul>
            <li>
              Developed <span className="font-bold">FinTech</span> product
            </li>
            <li>
              Developed <span className="font-bold">Tax planning system</span>
            </li>
            <li>
              Developed <span className="font-bold">Queueing System</span> for a Firm
            </li>
          </ul>
        </div>
      </div>
       <div className="text-3xl font-light max-w-screen-md pt-12">
        <div className="text-5xl"><b>🎓 Education</b></div><br />
        <div>
          <span className="font-bold text-3xl">Bachelor of Science in Computer Engineering</span><br/>
          <span className="text-2xl">University of Science and Technology of Southern Philippines</span><br/>
          <span className="text-2xl">Batch 2019</span>
        </div>
      </div>
    </div>
    <Image
      className="dark:invert"
      src="/Portfolio.png"
      alt="Personal Picture"
      width={700}
      height={38}
      priority
    />
  </div>
}
