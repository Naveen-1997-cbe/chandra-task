import React from 'react'
import Card from "../component/card";
import sachin from "../photos/sachin.jpg";
export default function Sachin() {
    return (
        <div>
            <Card
                name={"Sachin Tendulkar"}
                image={sachin}
                field={'Inidan Cricketer'}
                achievements={'Bharath Ratna'}
                born={'27th April 1975'}
                content1={`You ve heard the chant You may not have heard of the sport but you ve heard the chant  
                The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport
                Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the game
                To the people of India the 55 giant of a man was much more than that
                He was an emotion a symbol of hope in a nation that revered him as nothing short of a God `}
                content2={`You’ve heard the chant. You may not have heard of the sport, but you’ve heard the chant. 
                The chant - one that a billion people once lived by; one that would originate from the Wankhede and echo across the city and the seas. It is a name that continues to inspire many, not only in India, but all over the world, to take up the sport.
                Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest; yet he maintained that he wasn’t greater than than the game.
                To the people of India, the 5’5” giant of a man was much more than that. 
                He was an emotion; a symbol of hope in a nation that revered him as nothing short of a God.`}
            />
        </div>
    )
}
