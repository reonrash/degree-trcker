<script>
  import { user } from '../store'
  $: hoursCompleted = Math.round(($user[1]/62)*100);
  let userName = $user[0]
  

</script>

<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
  }
  .site-introduction {
    max-width: 400px;
  }
  h1 {
    position: relative;
    font-size: 4em;
    margin-bottom: 40px;
  }
  h1::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -20px;
    left: -10px;
    height: 60%;
    width: 100%;
    max-width: 300px;
    background-color: #71b5f4;
  }
  p {
    font-size: 1.3em;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 40px;
  }
  a {
    font-size: 1.3em;
    letter-spacing: 1px;
    font-weight: 300;
    text-decoration: none;
    color: black;
    
    border: 2px solid #7979799a;
    font-weight: 400;
    padding: 5px 20px;
  }
  .progress {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 250px;
      border-radius: 100%;
      background-color: #71b5f4;
  }
  .progress p:first-child {
      margin: 0;
      color: white;
      font-weight: 700;
      font-size: 3em;
      line-height: 1;
  }
  .progress p:nth-child(2) {
      margin: 0;
      color: white;
      
  }
  @media only screen and (max-width: 900px) {
  section {
    gap: 100px;
    justify-content: center;
    flex-direction: column;
  }
  section div:nth-child(1) {
      align-self: flex-start;
  }
}

</style>

<section>
  <div class="site-introduction">
  <h1>Hi, {userName}</h1>
    <p>
      Look how far you’ve came ! Explore and edit your degree, all in one place with tracker.
    </p>
    <a href="#!">Add Classes</a>
  </div>
  <div class="progress">
      <p>{hoursCompleted}%</p>
      <p>Degree Completion</p>
  </div>
</section>
