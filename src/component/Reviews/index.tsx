import { Rating } from "@mui/material"
import style from "./index.module.css"
import { useRef, useState } from "react"

function ReviewCard({ title, text, rating, author }: { title: string, text: string, rating: number, author: string }) {
    return (
        <div className={style.review}>
            <div>
                <h5>{title}</h5>
                <Rating name="read-only" value={rating} readOnly />
                <p>
                    {text}
                </p>
            </div>
            <p>
                {author}
            </p>
        </div>)
}

export default function ReviewsSection() {
    const isMouseDown = useRef<boolean>(false)
    const [dataX, setDataX] = useState<number>(0)
    return(
        <>
        <div className={style.reviews} onMouseMove={(ev) => {
            
        }}>
                <div style={{
                    translate : dataX+"px 0px"
                }}>
                    {
                        Array.from({ length: 8 }, (_, index) => <ReviewCard key={"ReviewCard" + index} title="Sangat membantu!" author="arya_ar" rating={5} text="Aplikasi ini sangat membantu sekali, karena memiliki fitur video tutorial yang mudah dipahami." />)
                    }
                </div>
            </div>
        </>
    )
}