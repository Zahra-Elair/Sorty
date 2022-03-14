export class sort {
  constructor(Type, speed, array) {
    this.speed = speed;
    this.type = Type;
    this.array = array;
    this.sortedArray = [];
    this.columns = document.querySelectorAll(".column");
    this.id = 0;
  }

  selectionSort(arr) {
    let i,
      j,
      min_idx,
      n = arr.length,
      sortedArray = [];

    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      sortedArray.push([min_idx, i]);
      let tmp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = tmp;
    }
    this.sortedArray = sortedArray;
  }

  insertionSort(array) {
    let N = array.length;
    let i, j;
    let sortedArray = [];

    for (i = 1; i < N; i++) {
      j = i;

      while (j > 0 && array[j] < array[j - 1]) {
        sortedArray.push([j, j - 1]);
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j -= 1;
      }
    }
    this.sortedArray = sortedArray;
  }

  bubbleSort(array) {
    let sortedArray = [];
    let i, j;
    let len = array.length;
    let isSwapped = false;
    for (i = 0; i < len; i++) {
      isSwapped = false;
      for (j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          sortedArray.push([j, j + 1]);
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;

          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    this.sortedArray = sortedArray;
  }

  async start() {
    switch (this.type) {
      case "Bubble Sort":
        this.bubbleSort(this.array);
        break;
      case "Selection Sort":
        this.selectionSort(this.array);
        break;
      case "Insertion Sort":
        this.insertionSort(this.array);
        break;
      default:
        break;
    }
    await this.sorting();
  }

  async sorting() {
    for (let i = 0; i < this.columns.length; i++) {
      this.columns[i].classList.remove("selected");
    }
    while (this.sortedArray.length > 0) {
      await this.swap(
        this.sortedArray[0][0],
        this.sortedArray[0][1],
        this.columns,
        this.speed
      );
      this.sortedArray.shift();
    }
  }

  swap = async (i, j, columns, speed) => {
    columns[i].classList.add("selected");
    columns[j].classList.add("selected");

    let k1 = columns[i].getAttribute("value");
    let k2 = columns[j].getAttribute("value");
    columns[i].setAttribute("value", k2);
    columns[j].setAttribute("value", k1);
    columns[i].style.height = `${k2 * 3}px`;
    columns[j].style.height = `${k1 * 3}px`;
    await this.delay(speed);
    columns[i].classList.remove("selected");
    columns[j].classList.remove("selected");
  };
  stop() {
    clearTimeout(this.id);
    this.sortedArray.shift();
  }

  delay(delayInms) {
    return new Promise((resolve) => {
      this.id = setTimeout(() => {
        resolve();
      }, delayInms);
    });
  }
}
