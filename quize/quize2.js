
        
            const questions =[
                {
                    quest :"Which one of the following river flows between Vindhyan and Satpura ranges?",
                    answer :[
                        {text:"Narmada", correct:true},
                        {text:"Mahanadi", correct:false},
                        {text:"Son", correct:false},
                        {text:"Netravati", correct:false},
                    ]
                        
                    },{
                        quest :"The Central Rice Research Station is situated in?",
                        answer :[
                            {text:"Chennai2", correct:false},
                            {text:"Cuttack2", correct:true},
                            {text:"Bangalore2", correct:false},
                            {text:"Netravati2", correct:false},
                        ]
                            
                        },{
                            quest: "Who among the following wrote Sanskrit grammar?",
                            answer :[
                                {text:"Chennai3", correct:false},
                                {text:"Cuttack3", correct:false},
                                {text:"panni3", correct:true},
                                {text:"Netravati3", correct:false},
                            ]
                                
                            },{
                                quest :"Which one of the following river flows between Vindhyan and Satpura ranges?",
                                answer :[
                                    {text:"Narmada4", correct:true},
                                    {text:"Mahanadi4", correct:false},
                                    {text:"Son4", correct:false},
                                    {text:"Netravati4", correct:false},
                                ]
                                    
                                },
            ];
        
            const question = document.querySelector(".question");
            const option = document.querySelector(".option");
            const nextBtn = document.querySelector(".next");
            // const mainDiv = document.querySelector("mainContent");

            let currentQuestionIndex = 0;
            let score = 0;
            
            function start(){
                // reset();
                // currentQuestionIndex = 0;
                // nextBtn.style.display = "block";
                nextBtn.innerHTML = "Next";
                let currentQuestion = questions[currentQuestionIndex];
                let number = currentQuestionIndex + 1;
                question.innerHTML = number + "." + currentQuestion.quest ;
                
            currentQuestion.answer.forEach(answer => {
                  let button = document.createElement("button");
                  button.innerHTML = answer.text;
                  button.classList.add("opt");
                  option.append(button);
                  if(answer.correct){
                    button.dataset.correct = answer.correct;
                    }
                  button.addEventListener("click", (e) =>{
                    let selectedBtn = e.target;
                    if(selectedBtn.dataset.correct){
                        selectedBtn.classList.add("correct");
                        score = score + 1;
                    }
                    else{
                        selectedBtn.classList.add("incorrect");
                    }

                    Array.from(option.children).forEach(button => {
                     if(button.dataset.correct === "true"){
                        button.classList.add("correct");
                     }
                     button.disabled = true;
                    });
                  });
            });

            }
            

            nextBtn.addEventListener("click", () => {
               
                
                if(currentQuestionIndex === questions.length - 1){
                //     while(option.firstChild){
                //         option.removeChild(option.firstChild);
                        
                //     }
               
                // question.innerHTML = `   you score ${score} out of ${questions.length}!!!`
                
            next1();
                
            
    // nextBtn.innerHTML = "play AGAIN!!!";
    
             nextBtn.addEventListener("click",() =>{
                    currentQuestionIndex = 0;
                    score = 0;
                    while(option.firstChild){
                        option.removeChild(option.firstChild);
                        
                    }
                   
                    question.style.display = "block";
                    nextBtn.addEventListener("click", () => {
                        while(option.firstChild){
                            option.removeChild(option.firstChild);
                            
                        }
                        start();
                    })
            });
            
                }
                else if(currentQuestionIndex < questions.length){
                while(option.firstChild){
                    option.removeChild(option.firstChild);
                    
                }
                currentQuestionIndex = currentQuestionIndex + 1 ;
                start();
            }
            });
            start();

         function next1() {
            while(option.firstChild){
                option.removeChild(option.firstChild);
                
            }
       
        question.innerHTML = `   you score ${score} out of ${questions.length}!!!`
        
    
        
    
nextBtn.innerHTML = "play AGAIN!!!";
         }
       