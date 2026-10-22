/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    // Используем Promise.all для параллельного выполнения вместо последовательного
    return Promise.all([mock(100), mock(200), mock(300)]);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        // Добавляем await, чтобы ошибка от Promise.reject попала в блок catch
        await Promise.reject(new Error('my error'));
    } catch (err) {
        // Проверяем тип ошибки (необходимо для TypeScript)
        if (err instanceof Error) {
            return err.message;
        }
    }
}
