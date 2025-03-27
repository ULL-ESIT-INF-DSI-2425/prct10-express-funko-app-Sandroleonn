import { watchMonitor } from "./watchMonitor.js";

const directoryToWatch = "."
const backupDirectory = "./directorio_backup"

watchMonitor(directoryToWatch, backupDirectory);