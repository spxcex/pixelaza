import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Icon, Leaf } from "lucide-react";
import Link from "next/link";

 const perks = [
  {
    name: "Instant Delivery",
    Icon:  ArrowDownToLine,
    description: "Go trade your items NOW!.",
  },
  {
    name: "Secured Trade.",
    Icon:  CheckCircle,
    description: "Every trade is Secured with our team",
  },
  {
    name: "World wide Trade.",
    Icon:  Leaf,
    description: "Lowest fees.",
  },

 ]

export default function Home() {
  return ( 
  <>  
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3x1">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">

        PIXELAZA Your Marketplace For Digital items {' '}
        <span className="text-blue-500"> in Game</span>
        .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to PIXELAZA. Every items in the game is Verified User and High quality
          product is serve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="https//:shopee.co.id/lebaren" className={buttonVariants()}>SHOPEE GROWTOPIA</Link>
          <Button variant='ghost'>Our quality promised &rarr; </Button>
        </div>
    </div>

    {/* TODO: List Products*/}
  </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50"> 
        <MaxWidthWrapper className='py-20'> 
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
                <div 
                key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>
                      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-bash font-medium text-gray-900">{perk.name}

                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {perk.description}
                        </p>
                      </div>
                </div>
            ))}
          </div> 
        </MaxWidthWrapper>
              </section>
    </>
  )
}

