import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorSwipeControlPlugin)
public class CapacitorSwipeControlPlugin: CAPPlugin {
    @objc func setWebViewNavigationGestures(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            call.reject("Missing 'enabled' parameter")
            return
        }

        DispatchQueue.main.async {
            guard let bridgeViewController = UIApplication.shared.windows.first?.rootViewController as? CAPBridgeViewController,
                  let webView = bridgeViewController.bridge?.webView as? WKWebView else {
                call.reject("CAPBridgeViewController or WKWebView is not available")
                return
            }

            webView.allowsBackForwardNavigationGestures = enabled

            call.resolve(["success": true])
        }

    }
}
