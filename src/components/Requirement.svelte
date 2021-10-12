<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function changeClass() {
    dispatch("statusChange", {
      course: course,
      courseName: courseName,
      taken: taken,
      core: core,
      hours: hours,
    });
    taken = !taken;
  }
  export let course = "";
  export let courseName = "";
  export let taken;
  export let core;
  export let hours;
  let changeStatus = taken ? "-" : "+";
</script>

<style>
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 60px;
    padding: 5px;
    align-items: center;
    transition: all 0.2s ease;
  }
  .row:hover {
    box-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
      5px 5px black, 6px 6px black;
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
    transform: scale(1.1);
  }
  .row.yellow {
    border: 2px solid #facc25;
  }
  .row.blue {
    border: 2px solid #71b5f4;
  }
  .beginning {
    display: flex;
    align-items: center;
  }
  .circle {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: #71b5f4;
    margin-left: 10px;
    margin-right: 50px;
  }
  .circle.yellow {
    background-color: #facc25;
  }
  .circle.blue {
    background-color: #71b5f4;
  }
  .course {
    font-weight: 700;
    margin-right: 80px;
  }
  .change {
    cursor: pointer;
    font-size: 1.2em;
    color: #797979;
    padding: 5px 15px;
    border: 3px solid #797979;
    border-radius: 16px;
    font-weight: 700;
  }
  .add {
    background-color: #facc25;
    border: 3px solid #facc25;
    color: black;
  }
  .remove {
    background-color: #71b5f4;
    border: 3px solid #71b5f4;
    color: black;
    
  }
</style>

<div class="row {taken ? 'blue' : 'yellow'}">
  <div class="beginning">
    <div class="circle {taken ? 'blue' : 'yellow'}" />
    <h3 class="course">{course}</h3>
    <p class="course-name">{courseName}</p>
  </div>
  <div class="change {taken ? 'remove' : 'add'}" on:click={changeClass}>
    {changeStatus}
  </div>
</div>
