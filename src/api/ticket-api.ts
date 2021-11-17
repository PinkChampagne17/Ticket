import { Ticket } from "../types/ticket";

const tickets: Array<Ticket> = [
  {
    id: 1,
    name: "远程支持票",
    description: "可获得活动PPT等资料",
    price: 9.99,
    quantity: 114514,
  },
  {
    id: 2,
    name: "赞助商",
    description: "获得品牌露出机会，详情联系13911451419",
    price: 9.99,
    quantity: 5,
  },
  {
    id: 3,
    name: "标准票",
    description: "可获得活动现场参加活动的机会",
    price: 0.99,
    quantity: 114514,
  },
];

export function fetchTickets() {
  return Promise.resolve(tickets);
}
