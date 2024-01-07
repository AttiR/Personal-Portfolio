import Header from './components/header';
import Skills from './components/skills';

export default function Home() {
  return (
    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
     <Header />
     <Skills />
    </main>
  )
}
