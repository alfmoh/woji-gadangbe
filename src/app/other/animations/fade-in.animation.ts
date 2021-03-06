import { trigger,state,animate,transition,style } from "@angular/animations";

export const fadeInAnimation = 
    trigger("fadeInAnimation",[
        state("void",style({opacity: 0})),
        transition(":enter",[
            style({opacity: 0}),

            animate(".3s ease-in-out", style({opacity: 1}))
        ])
    ])