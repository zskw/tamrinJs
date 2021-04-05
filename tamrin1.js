let members = [];

function loadTable(nameTable, array) {
  let html = "";
  if (nameTable == "myTable")
    for (let i = 0; i < array.length; i++) {
      html += `<tr>
      <td>${(array[i].member_id = i+1)}</td>
     <td>${array[i].member_name}</td>
     <td>${array[i].member_age}</td>
     <td><button
     class="btn btn-danger delete" type="button" onclick="delete_member(${
       members[i].member_id
     })"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
     </tr>`;
    }
  else {
    for (let i = 0; i < array.length; i++) {
      html += `<tr>
       <td>${array[i].member_id}</td>
       <td>${array[i].member_name}</td>
       <td>${array[i].member_age}</td>
       
       </tr>`;
    }
  }
  document.getElementById(nameTable).innerHTML = html;
}

function addMember() {
  let member_name = document.getElementById("name").value;
  let member_age = document.getElementById("age").value;
  let member_id = members.length+1;

  let newMember = { member_age, member_name, member_id };

  members.push(newMember);
  loadTable("myTable", members);
}
function search() {
  let find = document.getElementById("searchBox").value;
  if (members.length >= 1) {
    const match = _.filter(members, (user) => {
      return (
        user.member_name == find ||
        user.member_id == find ||
        user.member_age == find
      );
    });

    loadTable("searchTable", match);
  }
}
function delete_member(deleteItem) {
  members = _.remove(members, function (n) {
    return n.member_id != deleteItem;
  });
  loadTable("myTable", members);
}
