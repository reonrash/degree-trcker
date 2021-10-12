<script>
  import { user } from "../store";
  $: hoursNeeded = 36 - $user[1];
  $: classesNeeded = 19 - $user[4];
  $: hoursCompleted = $user[1];
  $: classesCompleted = $user[4];
</script>

<style>
  section {
    margin-top: 140px;
  }
  h1 {
    font-size: 4em;
    margin-bottom: 40px;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
  }
  .card {
    position: relative;
    height: 80px;
    width: 400px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 3px solid black;
    transition: all 0.3s ease;
  }
  .card:hover {
    box-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
      5px 5px black;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  .circle {
    color: white;
    letter-spacing: 1px;
    height: 100%;
    width: 80px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;

    background-color: #71b5f4;

    font-weight: 700;
    font-size: 2.5em;
  }
  .yellow {
    background-color: #facc25;
  }

  .text {
    font-size: 1.3em;
    font-weight: 700;
    letter-spacing: 1px;
    color: black;
  }
  @media only screen and (max-width: 700px) {
    .card {
      flex-direction: column;
      height: 120px;
      
    }
    .circle {
      width: 100%;
      height: 40%;
      margin: 0;
      margin-bottom: 20px;
     
    }
  }
</style>

<section>
  <h1>Statistics</h1>
  <div class="cards-container">
    <div class="card">
      <div class="circle">{classesCompleted}</div>
      <div class="text">Completed Classes</div>
    </div>

    <div class="card">
      <div class="circle">{hoursCompleted}</div>
      <div class="text">Completed Hours</div>
    </div>

    <div class="card">
      <div class="circle yellow">{classesNeeded}</div>
      <div class="text">Classes Needed</div>
    </div>

    <div class="card">
      <div class="circle yellow">{hoursNeeded}</div>
      <div class="text">Hours Needed</div>
    </div>
  </div>
</section>
