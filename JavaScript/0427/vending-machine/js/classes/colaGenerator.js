class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }

  // 시동을 걸어주는 함수
  // 클래스 내의 메서드를 실행시킴으로써 다른 메서드들이 순차적으로 실행되게 하는 역할
  async setup() {
    // laodData가 비동기 함수이기 때문에 await를 통해 기다려주어야 response에 값이 할당되고
    // colaFactory에 매개변수로 전달할 수 있게 된다.
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (response.ok) {
        // 서버의 응답 코드가 200 ~ 299 일 경우
        return response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
				<button class="btn-cola" type=button" data-item="${el.name}" data-count="${el.count}"
				data-price="${el.cost}" data-img="${el.img}">
					<img class="cola-img" src="./images/${el.img}" alt="">
					<span class="cola-name">${el.name}</span>
					<strong class="cola-price">${el.cost}원</strong>
				</button>
			`;

      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;
