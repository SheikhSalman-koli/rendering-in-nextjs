
import style from '../../components/mealhead.module.css'

    const fetchSingleMeals = async (id) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await res.json()
            return data.meals || []
        } catch (error) {
            console.log(error);
            return []
        }
    }


    export async function generateMetadata({ params }) {
      // read route params
      const id =await params?.id
     
      // fetch data
      const [meal] = await fetchSingleMeals(id)
    
      return {
        title: meal.strMeal,
        description: meal.strArea
      }
    }



export default async function page({ params }) {
    const id = await params?.id

    const [meal] = await fetchSingleMeals(id)

    return (
        <div className='p-8 space-y-6'>
            <div
                className='border-2 rounded-2xl space-y-2.5 p-3'
            >
                <img src={meal.strMealThumb} alt="" />
                <h1 className={style.mealheading}>{meal.strMeal}</h1>
                <p className='text-orange-500'>{meal.strArea}</p>
                <p className='text-blue-500'>{meal.strInstructions}</p>
            </div>

        </div>
    )
}
