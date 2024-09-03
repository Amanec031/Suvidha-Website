import React from "react";
import "./IELTS.css"
import Image from "./../../../assets/ieltsl.png"
import EnquiryForm from "../../Enquiry-Form/EnquiryForm";
import { BrowserRouter as Router, Routes, Route ,useNavigate} from "react-router-dom"; // Import Routes
import { Button } from "bootstrap";
const IELTS = () => {
  const navigate = useNavigate();

  const navigatetoEnquiry = () =>{
    navigate("/enquiry-form")
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return     <div>




  <div className="information">
    {/* <h1>GRE Exam Summary</h1> */}
  </div>
  <section class="details">
    <div class="details-card">
      <div class="details-content">
        <h3 class="card__title">IELTS Modules</h3>
        <p className="low_p">Updated on Dec 26, 2023, 05:24</p>
       <li>There are two main IELTS test modules: IELTS Academic and IELTS General Training</li>
       <li>IELTS has four sections: Listening, Reading, Writing, and Speaking.</li>
      </div>
    </div>
  </section>

 
  <section class="details">
  
    <div class="details-card">
      <div class="details-content">
        <h2 class="card__title">1. IELTS Listening</h2>
        <div className="header-image-container">
    <img className="header-image" src={Image} alt="Header Image" />
  </div>
        <div class="card_text">
          <p>
          Let's explore the IELTS Academic and IELTS General 
          Training modules for Listening.
        </p>
          <p>
          The IELTS Listening assesses your ability to understand spoken English in various everyday situations. This test is 
          the same for both IELTS Academic and IELTS General Training.
          </p>
          <p><b>Total Time: </b>The Listening test lasts for approximately 30 minutes.</p>
          <p><b>Total Questions:</b> You'll find 40 questions divided among the 4 sections in the Listening test.</p>
          <b>Some common types of question in the:</b>
          <li>Multiple Choice Questions</li>
          <li>True/False/Not Given</li>
          <li>Matching headings</li>
          <li>Matching information</li>
          <li>Sentence completion</li>
          <p>
          <b>Different Sections of Listening:</b>
          </p>
          <b>Section 1 - Conversation in Everyday Context: </b> 
          <p>In this section, you'll hear a conversation between two people, like booking a hotel room or talking to a neighbour. 
            There will be questions to answer based on what you hear.</p>
         
            <b>Section 2 - Monologue in Everyday Context: </b> 
          <p>Here, you'll listen to a single speaker providing information in an everyday context, such as giving directions or explaining a service.
             Again, you'll answer questions about the content..</p>


            <b>Section 3 - Conversation in an Educational or Training Context: </b> 
          <p>This section usually involves a conversation between multiple speakers, such as a university tutor and a student discussing an assignment or a trainer and trainees discussing a project. You'll need to answer questions 
            related to the conversation.</p>


            <b>Section 4 - Academic Lecture or Talk: </b> 
          <p>In this final section, you'll listen to a monologue on an academic topic, like a university lecture or a presentation. The speaker will provide information on a subject, and you'll answer
             questions based on the topic.</p>

             <h4>Tips for the IELTS Listening Test</h4>
             <li>Pay close attention to the recording and take notes while listening.</li>
             <li>Focus on keywords and phrases that will help you find the answers.</li>
             <li>Be prepared to hear different accents and speech speeds, as the test aims to reflect
               real-life English conversations and lectures.</li>

        </div>
      </div>
    </div>
  </section>
    {/* Section 2 */}
    <section class="details">
  
    <div class="details-card">
      <div class="details-content">
        <h2 class="card__title">2. IELTS Reading</h2>
        <div className="header-image-container">
    <img className="header-image" src={Image} alt="Header Image" />
  </div>
        <div class="card_text">
          <p>
          Let's delve into the details of the IELTS Academic
           and IELTS General Training Modules for Reading.
        </p>
          <p>
          This test assesses your ability to understand and extract information from written texts. It is essential to the IELTS Academic and IELTS
           General Training Modules. Here's what you need to know:
          </p>
          <p><b>Total Time: </b>You will have 60 minutes to complete the Reading Module.</p>
          <p><b>Total Questions:</b> There are 40 questions in total.</p>
          <p>
          The IELTS Academic Reading Module passages are sourced from various mediums, including books, journals, magazines, 
          newspapers, and online platforms, catering to a general readership. 
          </p>

          <p>The subjects are universally appealing to undergraduate or postgraduate students. The writing styles vary, encompassing
             narrative, descriptive, and discursive/argumentative forms. </p>

          <p>At least one passage presents a thorough, logical argument, and visuals like diagrams or graphs may be included. A straightforward dictionary
             definition is supplied when technical vocabulary is used.</p>

          <p>In the Academic Reading Module, you will encounter three sections given below:</p>
          <b>Section 1 :</b> 
          <p>This section includes a long, complex text often related to academic topics. You must respond to 
            questions that relate to the details provided in the passage.</p>
         
            <b>Section 2 : </b> 
          <p>Another lengthy passage, typically associated with work-related or general interest subjects. Again, questions will be based 
            on the content of the passage.</p>


            <b>Section 3 : </b> 
          <p> This section features a shorter, more complex text. You must answer 
            questions requiring a deeper understanding of the material.</p>


            <p><b>The sections of the IELTS General Training Reading Module are given below </b> </p>
            <b>Section 1 :</b> 
            <p> addresses everyday subjects essential for understanding life in an English-speaking
             environment, including notices, ads, and timetables. </p>
             <b>Section 2 :</b> 
             <p> focuses on work-related topics like job descriptions 
              and staff development. </p>

              <b>Section 3 :</b> 
             <p>explores a broader area of general interest. It is sourced from newspapers, magazines, books, and online platforms and is longer 
              and more intricate than those in Sections 1 and 2. </p>

             <h4>Tips for the IELTS Reading Test</h4>
             <li>Allocate a specific amount of time for each section. If you find a question particularly 
              challenging, move on and return to it later if time allows.</li>
             <li>The more you practise reading and answering questions, the more confident and skilled you will become.</li>
             <li>Use IELTS practice materials and sample tests to hone your reading skills.</li>

        </div>
      </div>
    </div>
  </section>

{/* Section 3 */}

<section class="details">
  
  <div class="details-card">
    <div class="details-content">
      <h2 class="card__title">3. IELTS Speaking</h2>
      <div className="header-image-container">
  <img className="header-image" src={Image} alt="Header Image" />
</div>
      <div class="card_text">
        <p>
        We’ll explore the IELTS Speaking test to assess how well you can talk and communicate in English. It is a face-to-face interview with a certified examiner. Speaking consists of three
         parts to evaluate your spoken English skills.
      </p>
        <p>
        IELTS Academic Speaking:
        </p>
        <p><b>Total Time: </b>The IELTS Academic Speaking test takes 11-14 minutes.</p>
        <p><b>Total Questions:</b> There are three parts to the test. Each part has its own set of tasks that assesses your ability to speak in various ways.</p>
        <b>Part 1(Introduction) :</b> 
        <p>This part begins with some general questions about you, your studies, your interests, and other familiar topics. It's like a
           warm-up, and it's designed to make you feel more comfortable.</p>
       
          <b>Part 2(Long Turn/ Cue Card):</b> 
        <p>You'll receive a task card with a topic and some prompts in this section. You have one minute to prepare, then speak about the subject for one to two minutes. This part examines
           your ability to talk at length on a given topic.</p>


          <b>Part 3 (Discussion):</b> 
        <p>In the final part, the examiner will ask you more complex questions related to the topic from Part 2. It tests your ability to engage in a
           detailed conversation and express your thoughts clearly.</p>


          <p><b>IELTS General Training Speaking:</b> </p>
          <p><b>Total Time: </b>The IELTS Academic Speaking test takes 11-14 minutes.</p>
          <p><b>Total Questions:</b> There are three parts to the test. Each part has its own set of tasks that assesses your 
           ability to speak in various ways.</p>
           <b>Part 1(Introduction) :</b> 
        <p> Like in the Academic module, this part starts with general questions
           about yourself, your daily life, and your interests.</p>
       
          <b>Part 2(Long Turn/ Cue Card):</b> 
        <p>In this section, you'll receive a task card with a topic to discuss. You'll have one minute to 
          prepare and then need to talk for one to two minutes on the subject.</p>


          <b>Part 3 (Discussion):</b> 
        <p>The last part discusses more abstract and challenging
           questions related to the topic from Part 2.</p>


           <h4>Tips for the IELTS Reading Test</h4>
           <li>Allocate a specific amount of time for each section. If you find a question particularly 
            challenging, move on and return to it later if time allows.</li>
           <li>The more you practise reading and answering questions, the more confident and skilled you will become.</li>
           <li>Use IELTS practice materials and sample tests to hone your reading skills.</li>

      </div>
    </div>
  </div>
</section>

{/* Section 4 */}


<section class="details">
  
  <div class="details-card">
    <div class="details-content">
      <h2 class="card__title">4.IELTS Writing</h2>
      <div className="header-image-container">
  <img className="header-image" src={Image} alt="Header Image" />
</div>
      <div class="card_text">
        <p>
        In the IELTS test, the Writing Test is a crucial part that assesses your ability to express yourself in writing. This module is the same
         for both IELTS Academic and IELTS General Training.
      </p>
        <p>
        IELTS Academic Training Writing:
        </p>
        <p><b>Total Time: </b>You'll have 60 minutes to complete two tasks.</p>
        <p><b>Total Questions:</b>The writing test has two tasks (Task 1 and Task 2).</p>
        <b>Task 1(150 words):</b> 
       <p><li>In the first task, you'll see a graph, chart, table, diagram, letter or map, and you must describe the information in your own words. For example, you will be asked to 
          write a letter responding to a given situation. </li></p>         
       <p><li>Keep it under 20 minutes, use at least 150 words,
         or you might get penalised for being too brief. </li></p>
      <p> <li>Longer Task 1 means less time for Task 2, which is more critical for your Writing score. This task tests your ability
         to present information in a clear and organised way.</li></p>


         <b>Task 2(250 words):</b> 
       <p><li>The second task is an essay. You'll be given a topic or a question, and you need to write an essay that presents an argument, 
        shares your opinion, or discusses a problem. </li></p>         
       <p><li>This task assesses your ability to express and support your ideas effectively. You need to write a letter
         correctly and clearly when facing a situation. </li></p>
      <p> <li>Use an academic or semi-formal style, organise your thoughts, and give examples or evidence from your experience. Spend no more than 40 minutes, write at least 250 words,
         and avoid being too brief to prevent penalties.</li></p>


          <p><b>IELTS General Training Writing:</b> </p>
          <p><b>Total Time: </b>You also have 60 minutes to complete two tasks.</p>
          <p><b>Total Questions:</b>Like the Academic module, there are two tasks here.</p>
          <b>Task 1(150 words):</b> 
       <p><li>In the first task, you'll see a graph, chart, table, diagram, letter or map, and you must describe the information in your own words. For example, you will be asked to 
          write a letter responding to a given situation. </li></p>         
       <p><li>Keep it under 20 minutes, use at least 150 words,
         or you might get penalised for being too brief. </li></p>
      <p> <li>Longer Task 1 means less time for Task 2, which is more critical for your Writing score. This task tests your ability
         to present information in a clear and organised way.</li></p>


         <b>Task 2(250 words):</b> 
       <p><li>The second task is an essay. You'll be given a topic or a question, and you need to write an essay that presents an argument, 
        shares your opinion, or discusses a problem. </li></p>         
       <p><li>This task assesses your ability to express and support your ideas effectively. You need to write a letter
         correctly and clearly when facing a situation. </li></p>
      <p> <li>Use an academic or semi-formal style, organise your thoughts, and give examples or evidence from your experience. Spend no more than 40 minutes, write at least 250 words,
         and avoid being too brief to prevent penalties.</li></p>


          <p><b>IELTS General Training Writing:</b></p>
          <p><b>Total Time: </b>You also have 60 minutes to complete two tasks.</p>
          <p><b>Total Questions:</b>Like the Academic module, there are two tasks here.</p>
             
          <b>Task 1(150 words):</b> 
          <p>In this task, you will be asked to write a letter. It could be a formal letter to request information or an informal letter to a friend, for example, inviting them to an event.
           The key is to convey your message clearly and appropriately.</p> 
        
           <b>Task 2(250 words):</b> 
          <p>You'll receive a topic or a question of general interest.You need to write
             an essay expressing your point of view on it.</p> 
        

           <h4>Tips for the IELTS Reading Test</h4>
           <li>Remember, you have limited time for each task. Make sure you dedicate around 20 minutes to Task 1 and approximately 40 minutes
             to Task 2. It will help you manage your time well.</li>
           <li>Make sure your writing is directly related to the task. Don't go off-topic. Read the instructions carefully.</li>
           <li>The more you practise, the more confident you'll become. Try writing essays and letters on various topics to improve your skills</li>

      </div>
    </div>
  </div>
</section>

























  {/* Adding a  Register now button  */}
  {/* <div className="Register">
    <button onClick={() => openInNewTab('/enquiry-form')} className="centered-button">Register Now</button>
  </div> */}
  
  <div className="Register">
    <button onClick={navigatetoEnquiry} className="centered-button">Register Now</button>
  </div>
  
</div>
};

export default IELTS;
