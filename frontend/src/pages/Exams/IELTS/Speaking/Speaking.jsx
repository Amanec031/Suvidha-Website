import React from 'react'
import Image from "./../../../../assets/ieltsl.png"
import "./Speaking.css"

function speaking() {
  return (
    <div>
  

  <div className="information">
    {/* <h1>GRE Exam Summary</h1> */}
  </div>
  <section class="details">
    <div class="details-card">
      <div class="details-content">
        <h3 class="card__title">IELTS Speaking Test</h3>
        <p className="low_p">Updated on Dec 26, 2023, 05:24</p>
       <li>In the IELTS Speaking test, you will talk to a certified examiner to assess your spoken English use.</li>
       <li>The Speaking test is the same for both IELTS Academic and General tests.</li>
      </div>
    </div>
  </section>

 
  <section class="details">
  
    <div class="details-card">
      <div class="details-content">
        <h2 class="card__title">1. IELTS Speaking Pattern</h2>
        <div className="header-image-container">
    <img className="header-image" src={Image} alt="Header Image" />
  </div>
        <div class="card_text">
         <p>
          In the IELTS Speaking, your communication skills will be systematically evaluated through a series of engaging tasks.
         </p>
           <div className="h-image-container">
           <img className="himage" src="https://leapassets.s3.ap-south-1.amazonaws.com/WEBP_3e82d4a7d8.webp" alt="Header Image" />
           </div>
        
          <p>
          You will talk to an examiner on various topics in the
           IELTS Speaking test. Here are some common topics:
          </p>

          <li>Personal</li>
          <li>Hobbies and interests</li>
          <li>Current Events</li>
          <li>Travel and holidays</li>
          <li>Food and drink</li>
          <li>Technology</li>
          <li>Education</li>
          <li>Work</li>
          <li>Career</li>
          <li>Hometown</li>
          <br />
          <p class="alert alert-primary" role="alert">
           Note: The IELTS Speaking test is the same for both Academic and General modules.
          </p>

        </div>
      </div>
    </div>
  </section>
    {/* Section 2 */}
    <section class="details">
  
    <div class="details-card">
      <div class="details-content">
        <h2 class="card__title">2.IELTS Speaking Tasks</h2>
        <div className="header-image-container">
    <img className="header-image" src={Image} alt="Header Image" />
  </div>
        <div class="card_text">
        <table className="table table-bordered table-responsive">
        <thead class="table-primary">
          <tr>
            <th>IELTS Speaking Parts</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Part 1</td>
            <td>Introduction and Interview (4-5 min)</td>
          </tr>
          <tr>
            <td>Part 2</td>
            <td>Long Turn (3-4 min)</td>
          </tr>
          <tr>
            <td>Part 3</td>
            <td>Two-way Discussion (4-5 min)</td>
          </tr>
        </tbody>
      </table>
           <h3>Part 1: Introduction and Interview</h3>
          <p>
          This part of the test lasts four to five minutes.
        </p>
          <p>
          In the IELTS Speaking test Part 1, you and the examiner will begin by introducing yourselves. Next, the examiner will ask you two or three general questions about your city or town, job, 
          hobbies and interests, family, and education.
          </p>
          <p>At the start of the test, the examiner will ask:</p>
          <p><li>Your Full Name</li>
              <li>What do you want them to call you </li>
              <li>Your ID or passport</li>
          </p>
          <p>
          This part of the test is designed to assess your ability to talk about everyday topics and your personal experiences. It's an opportunity 
          for you to express your thoughts and ideas
          </p>

          <p>Here are a few quick tips for Part 1 of the Speaking Test: </p>

          <p>
            <li>When you enter the room, 
              remember to smile and stay relaxed.</li>
            <li>Keep your ID ready, and don't be overly formal.</li>
            <li>Expect two to three questions on your hometown, home, studies, or work. Always aim for 
              simplicity and create a positive impression.</li>
            <li>Then, expect three to four questions on one topic and another set of three to four questions on a different topic. Keep your answers
               relatively concise for these questions.</li>
            <li>Aim to spend 10-20 seconds on each answer; don't
               be concerned if the examiner interrupts you.</li>
            <li>Most questions will revolve around your life and experiences. While some may require a simple "yes" or "no," try to expand on your answers by adding some details. This can be an effective
               strategy to showcase your speaking abilities.</li>
          </p>
            <h3>Part 2: Long Turn</h3>
          <p>Part 2 of the test lasts three to four minutes. The examiner will give you a Task/ Cue card with a question. A task card is a small piece of paper with specific questions you will have to talk about. There will also be three bullet
             points to structure your response.</p>

          <p>This is what a Cue/ Task card will look like:</p>
          <div class="alert alert-info" role="alert">
               <b>Describe a piece of art you like:</b>
               <p>You should say:</p>
               <li>What the work of art is</li> 
               <li>When did you see it first</li> 
               <li>What do you know about it</li> 
               <li>Explain why you like it</li> 
          </div>
            
          <p>You will have a minute to 
            prepare a monologue on the given topic. </p>

          <p>Then, you return the task card to the examiner and talk about the topic for 2 minutes. After your talk, the
             examiner may ask you a few questions at the end.</p>

             <p class="alert alert-primary" role="alert">
             <b>Remember, if you have spoken for two minutes, the examiner may not ask you an extra question.</b>
          </p>
            <p>Here are a few quick tips for Part 2 of the Speaking Test:</p>
            <p><li>Take a moment to gather your thoughts and prepare 
              during the one-minute preparation time.</li>
            <li>When speaking, maintain 
              a relaxed pace without rushing unnecessarily.</li>
            <li>Aim to speak for at least one and a half minutes,
              ensuring you cover the topic comprehensively.</li>
            <li>Before the test, practice speaking for two minutes to become more 
              comfortable with the timing and content.</li></p>

            <p><h3>Part 3: Two-way Discussions</h3> </p>
            <p>The duration of Part 3 in the Speaking test is typically four to five minutes. You will be asked further questions about the main topic in part 2. The examiner may also ask questions
               on some relevant sub-topics of the main topic.</p>
             <p>For example:</p> 
               
             <table className="table table-bordered table-responsive">
              <thead class="table-primary">
                <tr>
                  <th>Part 2: Long turn Topics</th>
                  <th>Part 3: In-depth Discussion Topics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Something you own that is important to you</td>
                  <td>Belongings, shopping, advertising, values</td>
                </tr>
                <tr>
                  <td>A holiday that you really enjoyed</td>
                  <td>Tourism, holiday destinations, travel</td>
                </tr>
                <tr>
                  <td>An item you would like to buy</td>
                  <td>Shopping, advertising, online shopping, 
                    consumerism, manufacturing, clothing</td>
                </tr>
              </tbody>
            </table>

 
             <p>You will typically get four to five questions and must give longer answers. There is no set word limit for a good part 3 answer,
               but it should not be too short or too long.  </p>
              <p>If your answer is too short, you have failed to develop it properly; if it is too long, you may go off-topic and make mistakes. As a rule, 
                you should answer in 3-4 sentences.</p>
              <p>The questions may contain
                 various themes, concepts, and discussions.</p>
              <p>Here are a few quick tips for Part 3 of the Speaking Test:</p>
            
             <li>Be prepared to offer detailed responses during this section.</li>
             <li>When sharing your opinion, go beyond a simple answer. Provide explanations and justifications for your viewpoint, 
              and consider evaluating the topic.</li>
             <li>If the examiner interrupts you, don't worry. It won't affect your overall score. Simply pause and stay 
              relaxed as you continue.</li>

        </div>
      </div>
    </div>
  </section>

{/* Section 3 */}

<section class="details">
  
  <div class="details-card">
    <div class="details-content">
      <h2 class="card__title">3. IELTS Speaking Band Scoring</h2>
      <div className="header-image-container">
  <img className="header-image" src={Image} alt="Header Image" />
</div>
      <div class="card_text">
        <p>
        Your IELTS Speaking band score reflects your proficiency in the Speaking section of the IELTS exam. The score is
         calculated based on the performance of four test criteria.
      </p>
        <p>
        The examiners assess your performance against four criteria:
        </p>
          
        <table className="table table-bordered table-responsive">
              <thead class="table-primary">
                <tr>
                  <th>Criteria</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fluency and coherence</td>
                  <td>0-9</td>
                </tr>
                <tr>
                  <td>Lexical resource</td>
                  <td>0-9</td>
                </tr>
                <tr>
                  <td>Grammatical range and accuracy</td>
                  <td>0-9</td>
                </tr>
                <tr>
                  <td>Pronunciation</td>
                  <td>0-9</td>
                </tr>
              </tbody>
            </table>

         <p>You will find below a detailed explanation for the above table:</p>


        <p><b>Fluency and Coherence (FC):</b></p>
        <p>
          <li>Talk smoothly without stopping or repeating the words</li>
          <li>Use the right grammar.</li>
          <li>Talk in a way that makes sense and sticks together.</li>
          <li>Show that you understand the topic.</li>

        </p>
        <p><b>Lexical Resource (LR):</b> </p>
        <p>
          <li>Use words that go together correctly.</li>
          <li>Use a variety of words.</li>
          <li>Try not to make mistakes with words.</li>
          <li>Use words that are not so common.</li>
        </p>
       
        <p><b>Grammatical Range (GR) and Accuracy:</b> </p>
        <p>
          <li>Keep the words in your sentences in the right order.</li>
          <li>Use verbs correctly.</li>
          <li>Make sure your sentences are grammatically correct.</li>
        </p>
        <p><b>Pronunciation:</b> </p>

        <p>
          <li>Speak with the right tone and rhythm.</li>
          <li>Say words correctly.</li>
          <li>Make sure you speak clearly so others can understand you during the test.</li>
        </p>
         
        <p>ELTS Speaking band score ranges from zero to nine, with no negative marking, which is reported in half and whole numbers. It is calculated 
          by deriving the average of all the mentioned criteria. </p>
        <p>For example, if you receive 6, 7, 7, and 8 in each measure, 
          6 + 7 + 7 + 8 = 28, which equals 7 when divided by 4.</p>

          <b>Part 3 (Discussion):</b> 
        <p>In the final part, the examiner will ask you more complex questions related to the topic from Part 2. It tests your ability to engage in a
           detailed conversation and express your thoughts clearly.</p>


          <p><b>How are the scores calculated?</b> </p>
          <table className="table table-bordered table-responsive">
              <thead class="table-primary">
                <tr>
                  <th>Calculation</th>
                  <th>Score</th>
                  <th>Score B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Add</td>
                  <td>(7.5+7.0+7.0+7.5)</td>
                  <td>(7+8+7+6)</td>
                </tr>
                <tr>
                  <td>Divide By</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Overall Score</td>
                  <td>7.5 (7.25 before round-off)</td>
                  <td>7</td>
                </tr>
              
              </tbody>
            </table>
            <p>
              <li>Add the four scores. </li>
              <li>Divide the total by four. </li>
              <li>Round the result to the nearest .5 or whole number.</li>
            </p>

            <p>For example, if you receive a band score ending with .25, i.e., 7.25, it will be rounded up to the next half band, i.e. 7.5; if you receive a band score ending with .75, for instance, 
              8.75, it will be rounded up to the next whole band 9.</p>

         

          
      </div>
    </div>
  </div>
</section>





 {/* faq */}
 <div className="information">
    {/* <h1>GRE Exam Summary</h1> */}
  </div>
  <section class="details">
    <div class="details-card">
      <div class="details-content">
        <h3 class="card__title">FAQ</h3>
        
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  </section>









    </div>
  )
}

export default speaking
