<script>
  import Requirement from "../components/Requirement.svelte";
  import OrRequirement from "../components/OrRequirement.svelte"
  import { user } from "../store";
  $: coreClasses = $user[2];
  $: nonCoreClasses = $user[3];
  let coreRequirement = [
    {
      id: "COMP 210",
      name: "Data Structures and Analysis",
      hours: 3,
      core: true,
    },
    {
      id: "COMP 211",
      name: "Systems Fundamentals",
      hours: 3,
      core: true,
    },
    {
      id: "COMP 301",
      name: "Foundations of Programming",
      hours: 3,
      core: true,
    },
    {
      id: "COMP 311",
      name: "Computer Organization",
      hours: 3,
      core: true,
    },
    {
      id: "COMP 455",
      name: "Models of Languages and Computation",
      hours: 3,
      core: true,
    },
    {
      id: "COMP 550",
      name: "Algorithms and Analysis",
      hours: 3,
      core: true,
    },
  ];
  let additionalRequirement = [
    {
      id: "MATH 231",
      name: "Calculus of Functions of One Variable I",
      hours: 4,
      core: false,
    },
    {
      id: "MATH 232",
      name: "Calculus of Functions of One Variable II",
      hours: 4,
      core: false,
    },
    {
      id: "MATH 233",
      name: "Calculus of Functions of Several Variables",
      hours: 4,
      core: false,
    },
    {
      id: "STOR 435",
      name: "Introduction to Probability",
      hours: 3,
      core: false,
    },
  ];
  $: coreHours = coreRequirement.reduce((acc, n) => {
    if (coreClasses.some((clas) => n.id === clas.id)) {
      return acc + n.hours;
    }
    if (acc == 0) {
      return 0;
    }
  }, 0);
  $: nonCoreHours = additionalRequirement.reduce((acc, n) => {
    if (nonCoreClasses.some((clas) => n.id === clas.id)) {
      return acc + n.hours;
    }
    if (acc == 0) {
      return 0;
    }
  }, 0);
  function handleStatusChange(e) {
    let course = {
        id: e.detail.course,
        name: e.detail.courseName,
        hours: e.detail.hours,
        core: e.detail.core
    }
    if (e.detail.taken) {
      if (e.detail.core) {
        user.set([$user[0], $user[1] - e.detail.hours, $user[2].filter((el) => course.id != el.id),$user[3], $user[4] - 1]);
      } else {
        user.set([$user[0], $user[1] - e.detail.hours, $user[2], $user[3].filter((el) => course.id != el.id), $user[4] - 1]);
      }
    } else {
      if (e.detail.core) {
        user.set([$user[0], $user[1] + e.detail.hours, [...$user[2], course],$user[3], $user[4] + 1]) 
      } else {
        user.set([$user[0], $user[1] + e.detail.hours, $user[2],[...$user[3], course], $user[4] + 1]) 
      }
    }
  
  }
</script>

<style>
  section {
    margin: 140px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  h1 {
    margin-bottom: -10px;
  }
  p {
    font-size: 1.5em;
    font-weight: 400;
    padding: 10px 0;
    letter-spacing: 1px;
  }
  .row-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>

<section>
    <OrRequirement></OrRequirement>
  <div>
    <h1>Core Requirements</h1>
    <p>Five additional classes needed</p>
    <div class="row-container">
      {#each coreRequirement as clas}
        <Requirement
          course={clas.id}
          courseName={clas.name}
          taken={coreClasses.some((el) => clas.id === el.id)}
          core={clas.core}
          hours={clas.hours}
          on:statusChange={handleStatusChange} />
      {/each}
    </div>
    <p>{coreHours}/36 total hours completed</p>
  </div>

  <div>
    <h1>Additional Requirements</h1>
    <p>Five additional classes needed</p>
    <div class="row-container">
      {#each additionalRequirement as clas}
        <Requirement
          course={clas.id}
          courseName={clas.name}
          taken={nonCoreClasses.some((el) => clas.id === el.id)}
          core={clas.core}
          hours={clas.hours}
          on:statusChange={handleStatusChange} />
      {/each}
    </div>
    <p>{`${nonCoreHours}/26`} total hours completed</p>
  </div>
</section>
