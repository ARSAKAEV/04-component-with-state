import { useState } from "react";

function Detective() {
    const [sherlock, setSherlock] = useState('психопат')
    
    return(
        <p>
            Шерлок - {sherlock}
        </p>
    )
};

export default Detective;