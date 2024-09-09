import React, { useState } from 'react'
import Title from '../Layouts/Title'
import Card from './Card'
import Modal from './Modal'
import { AiFillAppstore } from 'react-icons/ai'
import { FaGlobe, FaMobile } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })

  const handleOpenModal = (title, content) => {
    setModalContent({ title, content })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section
      id='features'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <Title title='Features' des='What I Do' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card
          title='Tailwind - CSS'
          des='Tailwind CSS is a utility CSS framework that allows developers to design interfaces directly in their HTML or JSX files using predefined classes.'
          onOpenModal={() =>
            handleOpenModal(
              'Tailwind - CSS',
              '<p class="mb-4">- Its approach is based on creating styles from small, reusable blocks, which facilitates rapid and efficient development. Some of its key features include customization through a configuration file (tailwind.config.js), support for dark and light themes, and classes to control aspects like layout, typography, colors, spacing, and more. Additionally, Tailwind CSS is highly modular and allows for purging unused styles in production, resulting in lighter and more optimized CSS files. It is widely used in projects where speed and visual consistency are essential.</p>' +
                '<p class="mb-4">- CSS (Cascading Style Sheets) is essential in web design because it allows developers to control the visual presentation of a website. With CSS, the appearance of HTML elements, such as colors, typography, spacing, and layout, can be defined without altering the content structure.</p>' +
                '<p class="mb-4">- One of the main reasons to use CSS in web design projects is the separation of content and presentation. This allows the same HTML to be displayed differently across various devices or contexts, such as mobile phones, tablets, and desktops, using media queries for responsive design.</p>' +
                '<p class="mb-4">- CSS also offers consistency and reusability, as rules defined in a single CSS file are applied globally across the site, ensuring a uniform appearance and simplifying updates. Additionally, it enhances accessibility by allowing sites to be adjusted to meet accessibility standards, such as color contrast and font size.</p>' +
                '<p>- CSS is fundamental in creating modern and attractive interfaces, improving user experience by making sites more interactive, visually appealing, and easy to navigate.</p>'
            )
          }
        />
        <Card
          title='App Development'
          des="Using robust and scalable technologies are the key in today's app development."
          icon={<AiFillAppstore />}
          onOpenModal={() =>
            handleOpenModal(
              'App Development',
              "<p class='mb-4'>Using robust and scalable technologies are the key in today's app development. For instance, React is a JavaScript library used for constructing dynamic and interactive client-side interfaces. It is often chosen for the frontend because of its state-management and ability to update the DOM efficiently.</p>" +
                '<p class="mb-4">Node is a powerful combination for the backend. js along with Express. Node. js(which allows to run JavaScript on the server) and Express(a minimalist web framework). It is a great combination for creating APIs quickly and efficiently with high scalability.</p>' +
                '<p class="mb-4">Node being JS and MongoDB a NoSQL database, provide the perfect synergy between them. It integrates with js and Express very well by allowing to store data in a flexible, scalable structure. It is ideal for high-traffic applications that require horizontal scalability while keeping the app response time to a minimum, such as real-time databases.</p>' +
                '<p class="mb-4">Next. Next.js is a React framework that makes the development experience easy and also gives us features like server-side rendering and static site generation. This improves the performance of the applications and also enables comforts for refactoring control flows such as resource optimization, routing.</p>' +
                '<p class="mb-4">When you deal with more complex applications in the backend, using TypeScript along with Java offers very good advantages. TypeScript is really just a superset of JavaScript, that gives you ty[ing added on]=]And this makes our code more clean and reduces errors. Java is popular and enterprise ready programming language that has good performance.</p>' +
                '<p class="mb-4">Working together, these technologies finally provide a truly modern app development solution by combining best in class UX and infrastructure.</p>'
            )
          }
        />
        <Card
          title='SEO Optimisation'
          des='Search engine optimization is an essential digital marketing exercise that progressively guides your website along with...'
          icon={<SiProgress />}
          onOpenModal={() =>
            handleOpenModal(
              'SEO Optimisation',
              "<p class='mb-4'>SEO — Search engine optimization is an essential digital marketing exercise that progressively guides your website along with the SERPs (search engine results pages). SEO stands for (Search Engine Optimisation) It is the practice of designing web pages that can be optimized to achieve high rankings in search engines. A successful SEO optimization process intended at improving not only ranking, but also traffic input will happen from Google with this technique called organic tissue so without a doubt it means effective targeting both quality and quantity of website-footprints on the first page result(node).</p>" +
                '<p class="mb-4">Keyword optimization is one of the core parts in SEO. Through keyword research and appropriate usage of keywords on websites, meta descriptions and headers businesses can ensure that their web pages are more closely in line with user search queries. Because it tells search engines what the content is going to be about and if that piece of text should indeed match a specific topic or query.</p>' +
                '<p class="mb-4">Another important element is on-page SEO which refers to the practice of optimizing individual web pages in order to rank higher and earn more relevant traffic. This consists of: making sure your page titles are optimized, meta tags and headlines have targeted keywords placed strategically around the page (and used to drive it home), & that you provide value with helpful/engaging content. Properly structured and well-informed content not just makes the user’s experience good but also brings your page on a bit more up from the rankings.</p>' +
                '<p class="mb-4">Technical SEO — backend elements of the website like site speed, mobile-friendliness and secure connection A fast-loading, responsive site that uses HTTPS will help search engines recognize and crawl the site better as well provide a great user experience.</p>' +
                "<p class='mb-4'>Link-building strategies are part of off-page SEO that builds the site's authority and credibility. When a company builds legitimate links from other trustworthy online properties, this can increase the authority of their domain and improve ranking potential.</p>" +
                '<p class="mb-4">SEO optimization increases website visibility, attracts visitors that convert and improves user experience. With the emergence of new businesses and increased competition in a saturated world of websites, having your unique digital marketing techniques will portray reliability to search engines which means if you are not visible on searches unfortunately that business must have sketchy products/services therefore an effective SEO strategy is crucial today becoming more publicly relayed.</p>'
            )
          }
        />
        <Card
          title='Mobile Development'
          des='Mobile development is a term that refers to the creation of applications for use on mobile devices...'
          icon={<FaMobile />}
          onOpenModal={() =>
            handleOpenModal(
              'Mobile Development',
              '<p class="mb-4">Mobile development is a term that refers to the creation of applications for use on mobile devices; even Novoda (the company I work at) has gone as far to say they enhance user experiences across smartphones and tablets. While developing modern mobile applications — both frontend and backend technologies are important to build fully-featured, high-performance scalable apps.</p>' +
                '<p class="mb-4">React Native looks forward as a popular choice for the frontend side. The ability for developers to create mobile apps that look and feel truly native, all with the wonderful benefits of working in React. Flutter — Created by Google, Flutter is a cross-platform technology that compiles down to natively compiled mobile and web apps using the Dart language. Flutter is known for its highly performant and expressive UI.</p>' +
                '<p class="mb-4">On the backend, Node. js: Node is a great choice to use JavaScript for server-side scripting. It works well with frameworks such as Express for creating a robust and fast API. Another backend service is Firebase, with live databases and authentication as well as some cloud functions: a collection of tools that really helps to simplify development for us.</p>' +
                '<p class="mb-4">Spring Boot: Spring Boot is a Java-based framework that simplifies the construction of stand-alone production-ready application frameworks. It is a NoSQL Database that when joined forces with MongoDB, can improve the flexibility in data storage and enhance handling of big-data.</p>' +
                '<p class="mb-4">All these technologies (from Graphql, Apollo Client and Absinthe) allows developers to build a mobile application fast enough without sacrificing the quality that can provide better user experience on theirbrespective platforms.</p>'
            )
          }
        />
        <Card
          title='UML'
          des='Unified Modeling Language, a powerful tool in the world of software engineering designed to visualize design and architecture of software.'
          icon={<SiAntdesign />}
          onOpenModal={() =>
            handleOpenModal(
              'UML',
              '<p class="mb-4">UML — Unified Modeling Language, a powerful tool in the world of software engineering designed to visualize design and architecture of software systems. A standardized way of defining structural requirements, visualizing software systems and documenting the architecture roles that form it.</p>' +
                '<p class="mb-4">Broad spectrum of application: UML models all basic usages and aspects in worlflow behaviour which makes it dehumanizing. This includes several types of diagrams, such as class diagram to visualize a static structure modeling classes, their attributes and relationships. These diagrams show how objects communicate with each other first looks like (ie. flow of messages and operations performed N/A). By keeping use case diagrams which depict how one or more external actors interact with the system, and their corresponding interaction between each other as functional requirement capture area whereas based on that detailing it further by depicting actual activity diagram(flow of activities) inside/within those requires to be done completely.</p>' +
                '<p class="mb-4">UML is used at some stages of the software development cycle, in planning to design and implementation phases till maintenance phase. UML diagrams while during design, helps in understanding and communication of system architecture & D/F decisions amongst stakeholders. Helping to give a clear idea about what the components of your system are and how they interact with each other, this will help you plan accordingly.</p>' +
                '<p class="mb-4">Beyond this, UML is great for documenting complex systems so that developers understand the structure and behavior of a system clearly. This documentation is very useful for future maintenance so that someone who comes to such system in live mode can see quickly from what it consists, how changing and updating this mechanism etc.</p>' +
                '<p class="mb-4">To summarize, UML is a vital tool for the software development aspect that helps them to develop highly structured and manageable systems of creating an effective coding. By using diagrams, developers can visualize specific facets of the design and use them as a way to help communicate concepts better or even pieces out logic during the development process.</p>'
            )
          }
        />
        <Card
          title='Data Structure'
          des='Data structures are essential for organizing and managing data in programming, or Python.'
          icon={<FaGlobe />}
          onOpenModal={() =>
            handleOpenModal(
              'Data Structure - Python',
              '<p class="mb-4">Data structures are essential for organizing and managing data in programming, or Python. Performance and complexity cannot be easily handled in programs without them.</p>' +
                '<p class="mb-4">There are several built-in data structures that Python provides, each with their advantages and use cases:</p>' +
                '<p class="mb-4">3) Lists: Ordered, mutable sequences that can contain a variety of types They are mutable and can perform indexing, slicing and others. A list is more suitable for storing collections of items when you need to perform operations on them, or the sequence matters as well.</p>' +
                '<p class="mb-4">Tuples: Tuples, like lists, are immutable meaning that you can not change their content once created. The fact that they are immutable ensures data integrity and fits very well for fixed collections of items like row in a database etc. They can be used to return many values from a function or keys in dictionaries.</p>' +
                '<p class="mb-4">Dictionaries: Dictionaries are unordered groups of key-value pairs. They are fast in access an element based on the unique key, so it is more suitable for looking up values. Dictionaries are commonly used to implement associative arrays and manage collections of data with a unique key.</p>' +
                '<p class="mb-4">Sets – Sets are unordered collection of elements (The element must be unique in a set). They are helpful for operations like membership test, union, intersection and difference. SetsThe use of a set is really an efficient way to handle huge collections and mostly used when we want unique elements out from our data.</p>' +
                '<p class="mb-4">These data structures each have their own strengths. Ordered data -> Lists and TuplesAssociative Data — > DictionariesUnique Values -> Sets In this way, knowing and being able to effectively harness these data structures may result in better code that is simpler while also improving the performance of different algorithms and operations on Python programming.'
            )
          }
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </section>
  )
}

export default Features
