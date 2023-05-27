class AppServer {
  private app: string

  constructor(info: string) {
    this.app = info ?? 'Olá Dev'
  }
}
const obj = new AppServer(null)
console.log(obj)
