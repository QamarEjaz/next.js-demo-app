import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { Container ,Button } from 'react-bootstrap'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      
     <main>
     <Container className="mt-5">
       <h1>Home Page</h1> 
       <p>
       There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
         If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle 
         of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
         generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
         If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle 
         of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
         generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
         If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle 
         of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
         generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.

       </p>
     <Button variant="primary" href='/results'> Results </Button> 
     </Container>
      </main>

     
    </div>
  )
}
