import React from "react";
import { createRoot } from "react-dom";
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  function TempoName(){
    return (
        <div>
            <ol>
                <li>Reusable</li>
                <li>Reusable</li>
                <li>Reusable</li>
                <li>Reusable</li>
            </ol>
                    
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<TempoName />)