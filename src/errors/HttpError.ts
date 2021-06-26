export class HttpError extends Error {
  public status: number;
  public message: string;
  public code: string | undefined;

  constructor(status: number, message: string, code: string | undefined = undefined) {
    super(message)
    this.status = status
    this.code = code
  }
}