// بيانات الربط الجديدة والمؤكدة
const SUPABASE_URL = 'https://fjhdxygbkireyorlpdpz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaGR4eWdia2lyZXlvcmxwZHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMDU5NTksImV4cCI6MjA4NTU4MTk1OX0.hncdAU-_cfghPEJvT6UNwL8ooQMDFmy5zRJ00ngy4uc';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('staffPortalBtn').onclick = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 backdrop-blur-md';
    modal.innerHTML = `
        <div class="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl border-t-8 border-green-700 text-right" dir="rtl">
            <h3 class="text-2xl font-black text-green-900 mb-6 text-center" style="font-family:'Cairo'">إرسال تقرير للمدير / محمد حفني</h3>
            <form id="staffReportForm" class="space-y-4">
                <input type="text" id="staffName" required class="w-full p-4 bg-gray-50 border rounded-2xl outline-none" placeholder="الاسم الثلاثي">
                <input type="tel" id="staffId" required class="w-full p-4 bg-gray-50 border rounded-2xl outline-none text-right" placeholder="رقم الموبايل">
                <textarea id="staffNote" required rows="4" class="w-full p-4 bg-gray-50 border rounded-2xl outline-none" placeholder="تفاصيل الملاحظة أو الشكوى..."></textarea>
                <div class="grid grid-cols-2 gap-4 pt-2">
                    <button type="button" id="closeM" class="bg-gray-100 py-4 rounded-2xl font-bold">إلغاء</button>
                    <button type="submit" id="subBtn" class="bg-green-700 text-white py-4 rounded-2xl font-bold">إرسال الآن</button>
                </div>
            </form>
        </div>`;

    document.body.appendChild(modal);
    modal.querySelector('#closeM').onclick = () => modal.remove();

    modal.querySelector('#staffReportForm').onsubmit = async (e) => {
        e.preventDefault();
        const btn = modal.querySelector('#subBtn');
        btn.disabled = true;
        btn.innerText = 'جاري الإرسال...';

        try {
            const { error } = await supabaseClient
                .from('staff_reports')
                .insert([{
                    employee_name: document.getElementById('staffName').value,
                    employee_id: document.getElementById('staffId').value,
                    complaint: document.getElementById('staffNote').value
                }]);

            if (error) throw error;

            alert('✅ تم الإرسال بنجاح للمدير محمد حفني');
            modal.remove();
        } catch (err) {
            console.error('Error Details:', err);
            alert('❌ فشل الإرسال: تأكد من تفعيل الجدول (staff_reports) في مشروعك الجديد.');
        } finally {
            btn.disabled = false;
            btn.innerText = 'إرسال الآن';
        }
    };
};