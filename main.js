


const droppedArea = document.getElementById("DroppedArea");
const dragItems = [...document.querySelectorAll(".drag-item")];

dragItems.forEach(dragItem => {
    dragItem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("dragId", this.id)

    })
})

droppedArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

droppedArea.addEventListener("drop", function (e) {
    e.preventDefault();
    let drgId = e.dataTransfer.getData("dragId")
    console.log(drgId)
    const myDraggedItem=document.getElementById(drgId)
    droppedArea.appendChild(myDraggedItem)

})