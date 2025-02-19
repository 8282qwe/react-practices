package kanbanboard.controller.api;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> getCards() {
		return ResponseEntity.ok(JsonResult.success(cardRepository.findAll()));
	}

	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> getTasks(@RequestParam("cardNo") Long cardNo) {

		return ResponseEntity.ok(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> insertTask(@RequestBody Task task) {
		Objects.requireNonNull(task.getCardNo());
		Objects.requireNonNull(task.getName());

		task.setDone("N");
		taskRepository.insert(task);

		return ResponseEntity.ok(JsonResult.success(task));
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<String, String>>> updateTask(@PathVariable("no") Long no, @RequestBody Map<String,String> data) {
		Objects.requireNonNull(no);
		Objects.requireNonNull(data);

		taskRepository.updateDone(no, data.get("done"));

		return ResponseEntity.ok(JsonResult.success(Map.of("no", String.valueOf(no), "done", data.get("done"))));
	}

	@DeleteMapping("/task/{id}")
	public ResponseEntity<JsonResult<Long>> deleteTask(@PathVariable("id") Long no) {
		Objects.requireNonNull(no);
		taskRepository.delete(no);
		return ResponseEntity.ok(JsonResult.success(no));
	}
}
