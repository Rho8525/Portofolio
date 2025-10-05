<template>
  <div class="w-screen h-screen flex overflow-x-hidden scroll-smooth snap-x">
    <nav
      class="fixed bg-black text-white text-sm font-bold rounded-lg m-5 px-5 py-2"
    >
      <ul class="flex gap-5">
        <li
          class="hover:-translate-y-1 hover:scale-[1.1] animation-transform duration-300"
        >
          <a href="/Portofolio/#hello">Hello</a>
        </li>
        <li
          class="hover:-translate-y-1 hover:scale-[1.1] animation-transform duration-300"
        >
          <a href="/Portofolio/#about">About</a>
        </li>
        <li
          class="hover:-translate-y-1 hover:scale-[1.1] animation-transform duration-300"
        >
          <a href="/Portofolio/#skills">Skills</a>
        </li>
        <li
          class="hover:-translate-y-1 hover:scale-[1.1] animation-transform duration-300"
        >
          <a href="/Portofolio/#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div
      id="hello"
      class="shrink-0 w-screen h-screen snap-start flex items-center justify-center"
    >
      <div
        class="w-[50rem] border-x border-black rounded-lg m-5 p-5 hover:w-[51rem] hover:p-7 transition-all duration-300"
      >
        <div class="flex flex-warp items-center justify-between">
          <div class="font-bold">
            <p>Hello There!</p>
            <h1 class="text-3xl">I'm Rho</h1>
            <p class="font-normal text-sm">
              i'm a tech enthusiast, or maybe i'm just curious.
            </p>
          </div>
          <NuxtImg class="rounded-md" src="rho.png" />
        </div>
      </div>
    </div>
    <div
      id="about"
      class="shrink-0 w-screen h-screen snap-start flex items-center justify-center"
    >
      <div
        class="w-[50rem] border-x border-black rounded-lg m-5 p-5 hover:w-[51rem] hover:p-7 transition-all duration-300"
      >
        <div class="text-center">
          <h2 class="text-xl font-extrabold">About Me</h2>
          <p>
            My real name is <span class="font-bold">Deni</span>, i'm a
            self-taught programmer from
            <span class="font-bold">Indonesia</span>. I'm still learning
            everyday, but looking back there is a lot i have learned, and of
            course a lot of experience i have gained. Those experience mostly
            came from <span class="font-bold">failures</span>, which is
            inevitable. Trials and errors is a must to become the
            <span class="font-bold">better</span> version of us.
          </p>
        </div>
      </div>
    </div>
    <div
      id="skills"
      class="shrink-0 w-screen h-screen snap-start flex items-center justify-center"
    >
      <div
        class="w-[50rem] border-x border-black rounded-lg m-5 p-5 hover:w-[51rem] hover:p-7 transition-all duration-300"
      >
        <div class="text-center">
          <h2 class="text-xl font-extrabold">Skills</h2>
          <p>
            i have learned some languages and a few that i frequently use are:
          </p>
          <ul
            class="flex items-center justify-around gap-5 bg-black font-bold text-white px-5 py-2 my-2 rounded-lg"
          >
            <li>C/C++</li>
            <li>Python</li>
            <li>Typescript</li>
            <li>Rust</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      id="contact"
      class="shrink-0 w-screen h-screen snap-start flex items-center justify-center"
    >
      <div
        class="w-[50rem] border-x border-black rounded-lg m-5 p-5 hover:w-[51rem] hover:p-7 transition-all duration-300"
      >
        <div class="text-center">
          <h2 class="text-xl font-extrabold">Contact</h2>
          <p>
            You can contact me via Discord, just join my server
            <a href="https://discord.gg/hyKyxGatqV"><u>here</u></a>
          </p>
          <a class="opacity-20 relative left-full" href="/Portofolio/#after">next</a>
        </div>
      </div>
    </div>
    <div
      id="after"
      class="shrink-0 w-screen h-screen snap-start flex items-center justify-center"
    >
      <div
        class="w-[50rem] border-x border-black rounded-lg m-5 p-5 hover:w-[51rem] hover:p-7 transition-all duration-300"
      >
        <div class="text-center">
          <h2 class="text-xl font-extrabold">Afterword</h2>
          <p>im still confused about what i want to do.</p>
        </div>
      </div>
    </div>
  </div>
</template>
