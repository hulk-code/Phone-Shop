import { useLoaderData } from "react-router-dom";


const Update = () => {
    const updatedata=useLoaderData()
    console.log(updatedata)
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt omnis. Quae at cumque repellat quibusdam doloribus praesentium reiciendis assumenda doloremque illum esse ullam eos neque ducimus fugiat ab minus laudantium deleniti architecto, facere beatae in voluptatem molestiae. Ad quasi nobis ipsa mollitia harum ut. Distinctio iusto possimus quos quam error nam molestiae natus accusantium omnis at nobis, delectus debitis excepturi nesciunt officia, minus repellat placeat odit velit fugit libero iure doloribus obcaecati? Tempore doloribus tempora odit adipisci fugit facilis, nulla dolorem quas corporis molestiae ipsa dignissimos illo accusantium deleniti quisquam reprehenderit quasi aspernatur magnam sapiente? Autem quo quia maiores?</p>
        </div>
    );
};

export default Update;