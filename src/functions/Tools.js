export const drawChart = (array, arrayLength) => {
  const chart = document.getElementById("chart");
  if (chart) {
    chart.innerHTML = "";
    for (let i = 0; i < arrayLength; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.setAttribute("value", array[i]);
      column.style.height = `${array[i] * 3}px`;
      chart.appendChild(column);
    }
  }
};
export const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * max));
