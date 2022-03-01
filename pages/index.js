import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";
import Hero from "../components/hero";
import Features from "../components/features";
import Feature from "../components/feature";
import Divider from "../components/divider";
import Recipes from "../components/recipes";
import Recipe from "../components/recipe";
import Modal from "../components/modal";

export default function Home() {
  return (
    <div className="rbf-layout">

      <Head>
        <title>Royal Blues Farm</title>
        <meta name="description" content="Royal Blues Farm U-Pick website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          src="img-hero-berryfield.jpg"
          alt="Blueberries Field"
          srcLogo="img-rbf-logo.svg"
          altLogo="Royal Blues Farm Logo"
          widthLogo={500}
          heightLogo={318}
        />

        <div className="container my-5 text-center text-white rbf-content">
          <h1 className="text-uppercase fw-bold">Our Story</h1>

          <p>Our story begins with one simple idea: to grow fresh, high quality blueberries that our community and surrounding areas can enjoy for seasons to come. And over the past two years, Royal Blues Farm has evolved into so much more. We are Local grown. We are community oriented. And we take great pride to be able to represent Nature in its purest form. We are a native Florida family of many generations, and proud of where we come from. And as a Culinary trained chef, it is important to me to understand and respect the process of growing the freshest and tastiest blueberries around.</p>

          <p>Here at the farm we want to share this farm experience with you and your family. Spending time outside in our fields can be good for the soul. It can revitalize your mind and energize your spirit. It is important to connect to where your food comes from, and we can provide just that. So come and join us, on our 50 acre farm, for some fresh air and happy smiles, while picking the best tasting blueberries around.</p>

          <p>Life may be moving fast and ever changing; but out here you can slow down, stay awhile and take it all in.</p>
        </div>

        <Features>
            <Feature src="img-bluebery-bucket.jpg"
                     alt="Blueberries in a bucket"
                     title="U-Pick Dates">
                 <p class="date">Saturday, March 5, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
                 <p class="date">Saturday, March 19, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
                 <p class="date">Saturday, March 26, 2022<br /><span className="text-secondary">5:00pm - 8:00pm</span></p>
            </Feature>

            <Feature src="img-bluebery-branch.jpg"
                     alt="Blueberries on a branch"
                     title="Follow Us">
                 <p>Hang with us in the<br />blueberry fields.</p>

                <div className="rbf-social">
                  <a className="rbf-social_icons" href="https://www.facebook.com/royalbluesfarm" target="_blank" aria-label="Tweet Us">
                    <i className="fa-brands fa-facebook-square"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a className="rbf-social_icons" href="https://www.instagram.com/royalbluesfarm/" target="_blank" aria-label="Tweet Us">
                    <i className="fa-brands fa-instagram"></i>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
            </Feature>
            <Feature src="img-bluebery-closeup.jpg"
                     alt="Close up of multi-colored blueberries"
                     title="Location">
                 <p>28078 Johnston Rd.<br />Dade City, FL 33523</p>

                 <p className="text-secondary small"><a href="https://goo.gl/maps/PGADmq5nbRs1kYrA7" target="_blank">Navigate with Google Maps</a></p>
            </Feature>
        </Features>

        <Divider
          src="img-icon-berries.svg"
          alt="Blueberries Icon"
          width={83}
          height={78}
        />

        <Recipes title="Our Favorite Blueberry Recipes" text="Click to view recipes">
            <Recipe src="img-crumble-recipe-1.jpg" alt="Blueberry Crumble Recipe">
              <button type="button" class="btn btn-link text-uppercase" data-bs-toggle="modal" data-bs-target="#recipeModal1">
                Blueberry Crumble Bars Recipe
              </button>
            </Recipe>

            <Recipe src="img-creamsicle-recipe-1.jpg" alt="Blueberry Lemon Creamsicle Recipe">
              <button type="button" class="btn btn-link text-uppercase" data-bs-toggle="modal" data-bs-target="#recipeModal2">
                Blueberry Lemon Creamsicle Recipe
              </button>
            </Recipe>
        </Recipes>





          <div className="d-flex justify-content-center">
              <div className="alert alert-primary alert-dismissible fade show w-50" role="alert">
                  <strong>Edit this file</strong> in <code>pages/index.js</code>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
              </div>
          </div>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
