import java.util.*;
import java.util.HashMap;
import java.util.Map;

import java.util.stream.Collectors;

public class TestCaseDemo{
    public static void main(String[] args) {
        // Sử dụng ArrayList để lưu trữ toàn bộ test cases
        List<String> testCases = new ArrayList<>(Arrays.asList(
            "Login_TC01", "Logout_TC01", "Login_TC01", "Payment_TC02", "Payment_TC01", "Payment_TC02"
        ));

        // In ra tổng số test case đã chạy
        System.out.println("Tổng số test case đã chạy: " + testCases.size());

        // Sử dụng HashSet để lưu trữ các test case duy nhất
        Set<String> uniqueTestCases = new HashSet<>(testCases);


        // In ra số lượng test case duy nhất
        System.out.println("Số lượng test case duy nhất: " + uniqueTestCases.size());

        // In ra danh sách các test case duy nhất
        System.out.println("Danh sách test case duy nhất:");
        for (String testCase : uniqueTestCases) {
            System.out.println("- " + testCase);
        }
    }
}
 class User {
    String id;
    String name;
    String email;

    public User(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}


 class UserManager {
    public static void main(String[] args) {
        // Tạo HashMap để lưu thông tin người dùng
        Map<String, User> userMap = new HashMap<>();


        // Thêm 3 người dùng
        userMap.put("user_001", new User("user_001", "Nguyen Van A", "a@example.com"));
        userMap.put("user_002", new User("user_002", "Tran Thi B", "b@example.com"));
        userMap.put("user_003", new User("user_003", "Le Van C", "c@example.com"));

        // Lấy thông tin người dùng có ID là "user_002" và in ra tên
        User user002 = userMap.get("user_002");
        if (user002 != null) {
            System.out.println("Tên người dùng user_002: " + user002.name);
        }

        // Kiểm tra xem người dùng "user_004" có tồn tại không
        if (userMap.containsKey("user_004")) {
            System.out.println("Người dùng user_004 tồn tại.");
        } else {
            System.out.println("Người dùng user_004 không tồn tại.");
        }
    }
}
 class baitap3 {
    public static void main(String[] args) {
        List<String> logs = Arrays.asList("LoginAPI_TC01:PASS", "PaymentAPI_TC02:FAIL", "ProfileAPI_TC03:PASS", "PaymentAPI_TC02:FAIL", "LoginAPI_TC01:PASS", "LoginAPI_TC01:PASS");

        // HashMap<String, Integer> map = new HashMap<>();
        // for (String log : logs) {
        //     String[] parts = log.split(":");
        //     String testCase = parts[0];
        //     String result = parts[1];

        //     // Chỉ đếm các test case có kết quả là PASS
        //     if (result.equals("PASS")) {
        //         map.put(testCase, map.getOrDefault(testCase, 0) + 1);
        //     }
        // }
       //  đếm so lan chay các test case
    //    HashMap<String, Integer> countMap = new HashMap<>();
    //    for (String log : logs) {
    //        String[] parts = log.split(":");
    //        String testCase = parts[0];
    //        countMap.put(testCase, countMap.getOrDefault(testCase, 0) + 1);
    //    }
    //     // In ra số lần chạy của từng test case
    //     for (Map.Entry<String, Integer> entry : countMap.entrySet()) {
    //         //System.out.println("Test case " + entry.getKey() + " đã chạy " + entry.getValue() + " lần.");
    //     }
        List<String> testResults = Arrays.asList(
                "Login_TC01:PASS",
                "Payment_TC02:FAIL",
                "Profile_TC03:PASS",
                "Search_TC04:FAIL"
            );

        // su dung streams de loc ra cac test case co ket qua Failed
        List<String> failedTests = testResults.stream()
            .filter(result -> result.endsWith("FAIL"))
            .collect(Collectors.toList());

        // In ra danh sách các test case đã FAIL
        System.out.println("Các test case đã FAIL:");
        for (String test : failedTests) {
            System.out.println(test);
        }

    }
 }
