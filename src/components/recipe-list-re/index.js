import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-4xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-grey-800 mb-12">Recipes</h2>
        <div className=" p-4">
        <Link href={'/'} className="text-1xl mb-12 p-5 bg-grey" >Move to Homepage</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((listitem) => {
                return (
                  <Link href={`/recipelist/${listitem.id}`} key={listitem.id}>
                    <Card>
                      <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 ">
                          <img
                            src={listitem.image}
                            alt={listitem.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900">
                            {listitem.name}
                          </h3>
                          <div className="mt-4 flex item-center flex-wrap gap-2">
                            <p className="text-lg text-grey-600">
                              Rating : {listitem.rating}
                            </p>
                            <div>
                              {listitem.ingredients &&
                                listitem.ingredients.map((ingredient) => (
                                  <div key={ingredient.id}>
                                    <p className="text-sm text-grey-300">
                                      {ingredient.name}
                                    </p>
                                  </div>
                                ))}

                            </div>
                          </div>
                          <div className="ml-auto ">
                            <p className="text-lg text-gray-600 font-bold">
                              {listitem.cuisine}
                            </p>
                          </div>
                          <div></div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
