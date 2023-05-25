import { ElNotification } from 'element-plus';
import Clipboard from 'clipboard';


/**
 * 信息提示
 */
 export function showMessage(text: string, type: any) {
    return ElNotification({
        message: text,
        type,
        duration: 2000,
        showClose: false,
    });
}

/**
 * 复制
 */
export function copyFunc(domSelect: string) {
    const clip = new Clipboard(domSelect);
    showMessage('复制成功', 'success');
    return clip;
}





