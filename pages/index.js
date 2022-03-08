import Head from "next/head";
import Image from "next/image";
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
        <meta name="description" content="Royal Blues U-Pick Farm and Goods" />

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
                 <p className="date">Saturday, April 9, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
                 <p className="date">Sunday, April 10, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
                 <p className="date">Saturday, May 7, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
                 <p className="date">Sunday, May 8, 2022<br /><span className="text-secondary">8:00am - 3:00pm</span></p>
            </Feature>

            <Feature src="img-bluebery-branch.jpg"
                     alt="Blueberries on a branch"
                     title="Follow Us">
                 <p className="mb-2">Hang with us in the<br />blueberry fields.</p>

                <div className="rbf-social">
                  <a className="rbf-social_icons" href="https://www.facebook.com/royalbluesfarm" target="_blank" aria-label="Like Us on Facebook" rel="noreferrer">
                    <i className="bi bi-facebook"/>
                  </a>
                  <a className="rbf-social_icons" href="https://www.instagram.com/royalbluesfarm/" target="_blank" aria-label="Follow Us on Instagram" rel="noreferrer">
                    <i className="bi bi-instagram"/>
                  </a>
                </div>
            </Feature>
            <Feature src="img-bluebery-closeup.jpg"
                     alt="Close up of multi-colored blueberries"
                     title="Location">
                 <p>28078 Johnston Rd.<br />Dade City, FL 33523</p>

                 <p className="text-secondary small"><a href="https://goo.gl/maps/PGADmq5nbRs1kYrA7" target="_blank" rel="noreferrer">Navigate with Google Maps</a></p>
            </Feature>
        </Features>

        <Divider
          src="img-icon-berries.svg"
          alt="Blueberries Icon"
          width={83}
          height={78}
        />

        <Recipes title="Our Favorite Blueberry Recipes" text="Click to view recipes">
            <Recipe src="img-crumble-recipe-1.jpg" alt="Blueberry Crumble Recipe" target="#RecipeModal1">
              <button type="button" className="btn btn-link text-uppercase" data-bs-toggle="modal" data-bs-target="#RecipeModal1">
                Blueberry Crumble Bars Recipe
              </button>
              <Modal id="RecipeModal1">
                <Image
                    src="/images/img-crumble-recipe-2.jpg"
                    alt="Blueberry Crumble Bar Recipe"
                    width={1183}
                    height={439}
                />

                <div className="rbf-modal-content text-start p-4">
                  <h3 className="text-uppercase fw-bold">Blueberry Crumble Bars Recipe</h3>

                  <div className="row">
                    <div className="col-lg-6">
                      <p className="text-uppercase mb-1">For the Crust:</p>
                      <ul className="list-unstyled">
                        <li>1 cup all-purpose flour</li>
                        <li>2 cups graham cracker crumbs</li>
                        <li>½ cup sugar</li>
                        <li>½ cup brown sugar</li>
                        <li>1 tsp baking powder</li>
                        <li>¼ tsp salt</li>
                        <li>1 egg</li>
                        <li>½ tsp vanilla</li>
                        <li>1 cup butter, chilled cut in cubes</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <p className="text-uppercase mb-1">Filling:</p>
                      <ul className="list-unstyled">
                        <li>1 tbsp cornstarch</li>
                        <li>½ cup sugar</li>
                        <li>1 tbsp lemon juice</li>
                        <li>4 cups fresh blueberries</li>
                      </ul>
                    </div>
                    <div className="col-12 mt-3">
                      <p className="text-uppercase mb-1">Directions:</p>
                      <ol>
                        <li>Preheat the oven to 350F. Line a 9x13 baking dish with parchment paper.</li>
                        <li>In a mixer, mix all crust ingredients until mixture starts to clump into balls.</li>
                        <li>Press 3/4 of the mixture into the baking dish and press to create an even layer of the crust.</li>
                        <li>Mix all of the filling ingredients in a mixing bowl and stir until the berries are evenly coated.</li>
                        <li>Spread the filling over the crust evenly.</li>
                        <li>Sprinkle the remainder of the crust on top to create a crumble topper.</li>
                        <li>Bake for 35-40 minutes, when the crumble appears golden.</li>
                        <li>Let this sit until the crumble has cooled and set before cutting into bars (you can even place in the fridge to help it set more before cutting into squares or bars).</li>
                        <li>Enjoy for breakfast or as a dessert with vanilla ice cream.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </Modal>

            </Recipe>

            <Recipe src="img-creamsicle-recipe-1.jpg" alt="Blueberry Lemon Creamsicle Recipe" target="#RecipeModal2">
              <button type="button" className="btn btn-link text-uppercase" data-bs-toggle="modal" data-bs-target="#RecipeModal2">
                Blueberry Lemon Creamsicle Recipe
              </button>
              <Modal id="RecipeModal2">
                <Image
                    src="/images/img-creamsicle-recipe-2.jpg"
                    alt="Blueberry Lemon Creamsicle Recipe"
                    width={1183}
                    height={439}
                />

                <div className="rbf-modal-content text-start p-4">
                  <h3 className="text-uppercase fw-bold">Blueberry Lemon Creamsicle Recipe</h3>

                  <div className="row">
                    <div className="col-lg-6">
                      <p className="text-uppercase mb-1">Blueberry Mixture:</p>
                      <ul className="list-unstyled">
                        <li>2 cups blueberries (fresh or frozen)</li>
                        <li>2 tbsp lemon juice</li>
                        <li>2 tbsp water</li>
                        <li>¼ cup sugar</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <p className="text-uppercase mb-1">Cream Layer:</p>
                      <ul className="list-unstyled">
                        <li>2 cups full fat greek yogurt (plain or vanilla)</li>
                        <li>¼ cup honey (or Royal Blues Farm seasonal blueberry honey)</li>
                        <li>2 tbsp freshly squeezed lemon juice</li>
                      </ul>
                    </div>
                    <div className="col-12 mt-3">
                      <p className="text-uppercase mb-1">Directions:</p>
                      <ol>
                        <li>Combine all blueberry mixture ingredients in a saucepan. Cook on medium heat until berries cook down and can be smashed with a fork (about 29 minutes). Let cool.</li>
                        <li>In a mixing bowl, combine the milk and condensed milk and stir until completely mixed. Stir in lemon juice. You can add more lemon if you like it tart.</li>
                        <li>Pour cream mixture about 2/3 full in each popsicle mold.</li>
                        <li>Put 1-2 spoonfuls of blueberry mixture in each mold. Store with a popsicle stick to swirl the mixtures together.</li>
                        <li>Freeze and enjoy.</li>
                      </ol>
                      <p className="small">Yield: 10-12 popsicles</p>
                    </div>
                  </div>
                </div>
              </Modal>
            </Recipe>
        </Recipes>

      </main>

      <footer className="text-center text-white">
        <p className="small">Copyright &copy;{new Date().getFullYear()} Royal Blues Farm, Inc. <span className="px-1">|</span> Powered by &nbsp;<a href="http://sensory5.com" target="_blank">Sensory 5</a></p>
      </footer>
    </div>
  )
}
