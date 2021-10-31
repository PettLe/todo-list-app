Oh dear... This was definetly the hardest project so far. No doubt. It was 13 long and crueling days. 2/3 of the time I battled with
either arrays and / or localStorage. And eventually my code got so convoluted that every bug I fixed broke two existing - formerly working - functions.
i.e. when deleting a single todo, after that the submit button only worked every other click. (And only refreshed page every other.)
Most of the things I have no idea anymore how I fixed them in the end. Soooo much trial and error. But, I did this all by myself. No cheating.

At first I tried having an array called projects, which would have contained all the projects, which in themselves would have contained all the todos.
Even now it's the solution that makes the most sense to me. But for some reason I just didn't get it to work and after few days I gave up. I came up with a
solution where I indexed the currently opened project, and tied that index in to the objects. Then when rendering the project, I filtered through that.
Not a surprise that it raised a problem with deleting projects: now the indexes in the objects don't match the list of projects left. But it was surprisingly easy
to fix. (Just looped through objects, the ones with higher index than the removed list index, I just lowered their index by one.)

There is still some things I wish to fix in the future, but not now. This project was so exhausting I feel like it's time to forward.
Examples: datePicker could be more elegant. (Though this is more my preference as an European). Inputting a long string without spaces (todo and project name)
will mess with the UI.
And the most annoying thing: page refreshes almost every turn an action is taken. But it was the only way to get this to work.
