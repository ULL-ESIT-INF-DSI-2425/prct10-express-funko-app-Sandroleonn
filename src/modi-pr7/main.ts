import { Logger } from "./Logger.js";

const logger = Logger.getInstance();

logger.logAction("user1", "login");
logger.logAction("user2", "logout");
logger.logAction("user1", "update_profile");

console.log(logger.getActionsByUser("user1"));
console.log(logger.getActionsByType("login"));

const startDate = new Date("2025-03-01");
const endDate = new Date("2025-03-31");
console.log(logger.getActionsBetweenDates(startDate, endDate));

for (const action of logger.getActions()) {
  console.log(action);
}