
import MealSearchInput from '../components/MealSearchInput'
import style from '../components/mealhead.module.css'

export  default async function page({searchParams}) {
    const query = await searchParams
    
    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json()
            // setMeals(data?.meals || [])
            return data.meals || []
        } catch (error) {
            console.log(error);
            return []
        }
    }

    const meals = await fetchMeals()

    return (
        <div className='p-8 space-y-6'>
            <div>
               <MealSearchInput></MealSearchInput>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {meals?.map(meal => {
                    return <div
                    className='border-2 rounded-2xl space-y-2.5 p-3'
                    key={meal.idMeal}
                    >
                        <h1 className={style.mealheading}>{meal.strMeal}</h1>
                        <p className='text-orange-500'>{meal.strArea}</p>
                        <p className='text-blue-500'>{meal.strInstructions.slice('100')}</p>
                    </div>
                })}
            </div>

        </div>
    )
}
