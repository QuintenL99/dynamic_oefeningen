const PICTURES_DATA = [
    {
        id: 1,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" ,
        author: "Aziz Acharki",
        name: "fauteuil.png"
    },
    {
        id: 2,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "fauteuil1.png"
    },
    {
        id: 3,
        credit: "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Boudhayan Bardhan",
        name: "fauteuil3.png"
    },
    {
        id: 4,
        credit: "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Madison Kaminski",
        name: "fauteuil4.png"
    },
];


export function PicturesPage(props) {
    return (
        <div>
            <h1>Pictures</h1>
            {PICTURES_DATA.map(item => (
                <div key={item.id}>
                    <img
                        src={'images/' + item.name}
                        alt={item.name}
                        width={"25%"}
                    />
                    <p>
                        <a href={item.credit} target="_blank" rel="noopener noreferrer">
                            {item.author}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
}

