const [ruralList] = document.getElementById("ruralList");
const [urbanList] = document.getElementById("urbanList");

{
    var selectedValue = document.getElementById("list1").value;

    if (selectedValue == rural) {
        urbanList.toggleAttribute("hidden");
      } else {
        ruralList.toggleAttribute("show");
      }
    if (selectedValue == urbana) {
        urbanList.toggleAttribute("hidden");
    } else {
        result = 'NOT positive';
    }
}