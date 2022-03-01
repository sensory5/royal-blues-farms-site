import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";
import Hero from "../components/hero";
import Features from "../components/features";
import Feature from "../components/feature";
import Modal from "../components/modal";

export default function Home() {
    return (
        <div className="container my-4">

            <Head>
                <title>The title goes here</title>
                <meta name="description" content="Description of the page here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <h1 className="d-flex justify-content-center">
                    Welcome to <span className="text-primary">Royal Blues Farms</span>
                </h1>

                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="alert alert-primary alert-dismissible fade show w-50" role="alert">
                            <strong>Edit this file</strong> in <code>pages/index.js</code>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
                        </div>
                    </div>
                </div>

                <hr className="my-2"/>

                <div className="row">
                    <h2 className="display-6 text-center">Example using a custom Button component</h2>
                    <Button className="btn btn-primary w-50 mx-auto" href="https://google.com" id="button-1">
                        Anything inside the markup is used as the <pre className="d-inline bg-white text-primary">children</pre>
                    </Button>
                </div>

                <hr className="my-2"/>

                <Hero src="/images/test-image.png" alt="Example Hero" title="A hero with no children" width={250} height={150}/>

                <hr className="my-2"/>

                <Hero src="/images/test-image.png" alt="Example Hero 2" title="A hero with children" width={100} height={100}>
                    <p className="lead mb-4">This hero has children, and changes the width of the image using Next&apos;s Image component.</p>
                    <p>Also note that apostrophes, must be added as <pre className="d-inline bg-info bg-opacity-25">&amp;apos;</pre>,
                        for example: <pre className="d-inline bg-info bg-opacity-25">Next&amp;apos;s Image Component</pre> will
                        produce <pre className="d-inline bg-info bg-opacity-25">Next&apos;s</pre></p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button className="btn btn-primary btn-lg px-4 gap-3" href="/" id="button-1">Button One</Button>
                        <Button className="btn btn-secondary btn-lg px-4 gap-3" href="/" id="button-2">Button Two</Button>
                    </div>
                </Hero>

                <hr className="my-2"/>

                <Features title="Features component with multiple features">
                    <Feature href="https://duckduckgo.com/?q=playful+cats&ia=web"
                             hrefLabel="Play with twist ties"
                             icon="bi-emoji-smile-fill"
                             title="Cat Ipsum">
                        <p>
                            Cat ipsum dolor sit amet, play with twist ties twitch tail in permanent irritation but step on your keyboard while you're gaming and then turn in a circle . Play with twist ties what the heck just happened, something feels fishy cats are cute and disappear for four days and return home with an expensive injury; bite the vet so attack curtains.
                        </p>
                    </Feature>
                    <Feature href="https://duckduckgo.com/?q=angry+cats&ia=web"
                             hrefLabel="Stare accusingly"
                             icon="bi-emoji-angry-fill"
                             title="Cat Ipsum 2">
                        <p>
                            Stare at owner accusingly then wink. Stand in front of the computer screen twitch tail in permanent irritation for i hate cucumber pls dont throw it at me, yet wack the mini furry mouse for thinking longingly about tuna brine sit and stare. Wake up human for food at 4am find empty spot in cupboard and sleep all day attack the child and meow in empty rooms yet cats are a queer kind of folk.
                        </p>
                    </Feature>
                    <Feature href="https://duckduckgo.com/?q=sunglass+cats&ia=web"
                             hrefLabel="Cough furballs"
                             icon="bi-emoji-sunglasses-fill"
                             title="Cat Ipsum 3">
                        <p>
                            Cat ipsum dolor sit amet, whatever lounge in doorway, for cough furball into food bowl then scratch owner for a new one kick up litter. Whenever a door is opened, rush in before the human eat too much then proceed to regurgitate all over living room carpet while humans eat dinner for purr like an angel
                        </p>
                    </Feature>
                </Features>

                <h2 className="display-6 text-center">Open modal</h2>
                <div className="text-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MyModal">
                        Launch demo modal
                    </button>
                    <Modal id="MyModal" title="This is my modal">
                        <p>This is the body of the modal</p>
                    </Modal>
                </div>
            </main>


            <footer className="">
            </footer>
        </div>
    )
}
