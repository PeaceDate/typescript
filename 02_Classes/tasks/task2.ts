abstract class LoggerController {
    abstract log(message: string): void;

    printDate(date: Date): void {
        this.log(date.toString())
    }
}

class Print extends LoggerController {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string ): void {
        this.printDate(new Date());
        this.log(message)
    }
}

const printEntity = new Print();

printEntity.logWithDate('Test')