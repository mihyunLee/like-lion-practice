class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector(".section1");

    this.balance = vMachine.querySelector(".bg-box p"); // 잔액
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box strong"); // 소지금

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".getList");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  staggedItemGenerator(target) {
    const staggedItem = document.createElement("li");
    staggedItem.innerHTML = `
			<img src="./images/${target.dataset.img}" alt="">
			${target.dataset.item}
			<strong>1
				<span class="a11y-hidden">개</span>
			</strong>
		`;
    this.stagedList.append(staggedItem);
  }

  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼을 누르면
     * 1) 소지금 === 소지금 - 입금액
     * 2) 잔액 === 기존 잔액 + 입금액
     * 3) 입금액이 소지금보다 많으면
     * 4) 입금액이 정상적으로 입금되면 입금창은 초기화 되야한다.
     */

    this.btnPut.addEventListener("click", () => {
      // 입력값(입금액)
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      if (inputCost) {
        // 입금액이 소지금보다 적거나 같다면 -> 입금되어야 함
        if (inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          this.balance.textContent =
            new Intl.NumberFormat().format((balanceVal || 0) + inputCost) +
            "원";
        }
        // 입금액이 소지금보다 많다
        else {
          alert("소지금이 부족합니다.");
        }
        // 입금액 초기화
        this.inputCostEl.value = "";
      }
    });

    /**
     * 2. 거스름돈 반환 버튼
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화된다.
     */

    this.btnReturn.addEventListener("click", () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 장바구니 채우기
     * 1) 아이템 가격이 잔액보다 크다면 경고메세지를 준다.
     * 2) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 3) 아이템이 장바구니에 들어간다.
     * 4) 아이템의 count가 -1이 된다. 아이템의 카운트가 0이되면 품절 표시를 한다.
     */

    // 1. constructor()는 class의 인스턴스가 생성될 때 실행된다.
    // 2. 현재 index.js 파일의 코드 순서는 클래스들의 인스턴스 생성 후에 메서드를 호출한다.
    // 3. 따라서 화면에 요소를 그려주는 setup() 메서드보다 DOM 요소를 찾아 변수에 할당하는
    // vendingMachineEvents의 constructor가 먼저 실행되기 때문에 그려준 DOM 요소를 찾을 수 없다.
    // 4. 결과적으로, vendingMachineEvents의 constructor에서 btnsCola를 찾으면 undefined가 되기 때문에
    // 해당 요소는 constructor() 밖에서 탐색하거나, setup()을 vendingMachineEvents 인스턴스 생성보다 위에 호출해주어야 한다.
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola");

    this.btnsCola.forEach((item) => {
      item.addEventListener("click", (event) => {
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );
        const targetElPrice = parseInt(event.currentTarget.dataset.price);

        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          //장바구니 콜라 생성
          this.staggedItemGenerator(event.currentTarget);

          // for (const itme of this.stagedList) {
          // }
        } else {
          alert("입금한 금액이 부족합니다.");
        }
      });
    });
  }
}

export default VendingMachineEvents;
