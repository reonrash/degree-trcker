<script>
  let extendo = [
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
  ];
  let taken = true;

</script>

<div class="row {taken ? 'blue' : 'yellow'}">
  <div class="status {taken ? 'bg-blue' : 'bg-yellow'}" /> 
  <div class="course-instance-container">
    {#each extendo as clas}
    <div class="course-instance ">
        <div class="course-info">
        <h3 class="course-id">{clas.id}</h3>
        <p class="course-name">{clas.name}</p>
        </div>
        <div class="change {taken ? 'remove' : 'add'}" >+</div>
      </div>
  {/each}
    
</div>
</div>

<style>
    .row {
    width: 100%;
    display: flex;
    padding: 5px;
    align-items: center;
    transition: all 0.2s ease;
    border: 3px solid black;
    border-radius: 10px;
  }
  .row:hover {
    box-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black;
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
    transform: scale(1.1);
  }
  .status {
      align-self: stretch;
      background-color: black;
      width: 40px;

      margin-left: 10px;
        margin-right: 30px;
  }
  .course-instance-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
  }
  .course-instance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 3px solid black;
    border-radius: 10px;
 
  }
  .course-info {
    display: flex;

  }
  .course-id {
    font-weight: 700;
    margin-right: 80px;
    margin-left: 10px;
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
  .blue {
      border: 3px solid #71b5f4;
  }
  .yellow {
      border: 3px solid #facc25;
  }
  .bg-blue {
      background-color: #71b5f4;
  }
  .bg-yellow {
      background-color: #facc25;
  }

</style>
